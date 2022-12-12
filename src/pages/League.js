import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetLeagueById } from '../services/Queries'
import LeagueInfo from '../components/LeagueInfo'
import LeagueMembers from '../components/LeagueMembers'
import TeamDisplay from '../components/TeamDisplay'
import PlayerDisplay from '../components/PlayerDisplay'

const League = ({ user, selectedLeague, setSelectedLeague }) => {
  let { id } = useParams()

  const getLeagueById = async (id) => {
    const response = await GetLeagueById(id)
    await setSelectedLeague(response)
  }

  useEffect(() => {
    getLeagueById(id)
  }, [])

  return (
    <>
      <main className="league-details-dash">
        <LeagueInfo
          user={user}
          selectedLeague={selectedLeague}
          id={id}
          getLeagueById={getLeagueById}
        />
        <LeagueMembers selectedLeague={selectedLeague} />
        <TeamDisplay selectedLeague={selectedLeague} />
        <PlayerDisplay selectedLeague={selectedLeague} />
      </main>
    </>
  )
}

export default League
