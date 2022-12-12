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
  setPlayers
}) => {
  const [toggle, setToggle] = useState(false)

  let { id } = useParams()

  const getLeagueById = async (id) => {
    const response = await GetLeagueById(id)
    await setSelectedLeague(response)
  }

  const getPlayers = async () => {
    const response = await GetPlayers()
    setPlayers(response)
  }

  useEffect(() => {
    getLeagueById(id)
    getPlayers()
  }, [])

  console.log(selectedLeague)

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
        <TeamDisplay selectedLeague={selectedLeague} />
        <PlayerDisplay selectedLeague={selectedLeague} players={players} />
      </main>
    </>
  )
}

export default League
