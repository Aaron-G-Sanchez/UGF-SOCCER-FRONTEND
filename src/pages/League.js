import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetLeagueById } from '../services/Queries'
import LeagueInfo from '../components/LeagueInfo'
import LeagueMembers from '../components/LeagueMembers'
import TeamDisplay from '../components/TeamDisplay'
import PlayerDisplay from '../components/PlayerDisplay'

const League = ({ selectedLeague, setSelectedLeague }) => {
  let { id } = useParams()

  const getLeagueById = async (id) => {
    const response = await GetLeagueById(id)
    setSelectedLeague(response)
  }

  useEffect(() => {
    getLeagueById(id)
  }, [])

  // console.log(selectedLeague)

  return (
    <>
      <main className="league-details-dash">
        <LeagueInfo selectedLeague={selectedLeague} />
        <LeagueMembers />
        <TeamDisplay />
        <PlayerDisplay />
      </main>
    </>
  )
}

export default League
