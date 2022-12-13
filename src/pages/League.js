import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetLeagueById, GetPlayers } from '../services/Queries'
import LeagueInfo from '../components/LeagueInfo'
import LeagueMembers from '../components/LeagueMembers'
import TeamDisplay from '../components/TeamDisplay'
import PlayerDisplay from '../components/PlayerDisplay'
import LeagueTeams from '../components/LeagueTeams'

const League = ({
  user,
  selectedLeague,
  setSelectedLeague,
  players,
  setPlayers,
  teams,
  setTeams,
  selectedTeam,
  setSelectedTeam
}) => {
  const [toggle, setToggle] = useState(false)

  let { id } = useParams()

  const getLeagueById = async (id) => {
    const response = await GetLeagueById(id)
    setSelectedLeague(response)
    setTeams(response.league.teams_id)
  }

  const getPlayers = async () => {
    const response = await GetPlayers()
    setPlayers(response)
  }

  // const getTeamId = async (id) => {
  //   if (teams) {
  //     setSelectedTeam(teams.find((team) => team._id === id))
  //   }
  // }

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
        <LeagueTeams teams={teams} setSelectedTeam={setSelectedTeam} />
        <TeamDisplay selectedTeam={selectedTeam} />
        <PlayerDisplay
          user={user}
          players={players}
          selectedTeam={selectedTeam}
          id={id}
        />
      </main>
    </>
  )
}

export default League
