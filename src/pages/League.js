import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetLeagueById, GetPlayers } from '../services/Queries'
import LeagueInfo from '../components/LeagueInfo'
import LeagueMembers from '../components/LeagueMembers'
import TeamDisplay from '../components/TeamDisplay'
import PlayerDisplay from '../components/PlayerDisplay'

const League = ({
  user,
  selectedLeague,
  setSelectedLeague,
  players,
  setPlayers,
  teams,
  setTeams,
  setUsersTeam
}) => {
  const [toggle, setToggle] = useState(false)

  let { id } = useParams()

  const getLeagueById = async (id) => {
    const response = await GetLeagueById(id)
    setSelectedLeague(response)
    setTeams(response.league.teams_id)
    setUsersTeam(
      response.league.teams_id.find((team) => team.creator_id === user.id)
    )
  }

  const getPlayers = async () => {
    const response = await GetPlayers()
    setPlayers(response)
  }

  useEffect(() => {
    getLeagueById(id)
    getPlayers()
  }, [])

  return (
    <>
      <main className="league-details-dash">
        <LeagueInfo
          user={user}
          selectedLeague={selectedLeague}
          id={id}
          getLeagueById={getLeagueById}
          toggle={toggle}
        />
        <LeagueMembers selectedLeague={selectedLeague} />
        <TeamDisplay
          user={user}
          selectedLeague={selectedLeague}
          teams={teams}
        />
        <PlayerDisplay players={players} />
      </main>
    </>
  )
}

export default League
