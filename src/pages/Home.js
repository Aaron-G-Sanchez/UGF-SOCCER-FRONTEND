import { useEffect } from 'react'
import LeagueDisplay from '../components/LeagueDisplay'
import { GetLeague } from '../services/Queries'

const Home = ({ user, league, setLeague }) => {
  const getLeague = async () => {
    const league = await GetLeague()
    setLeague(league)
  }

  useEffect(() => {
    getLeague()
  }, [])

  return user ? (
    <>
      <main className="home-dash">
        <LeagueDisplay league={league} />
      </main>
    </>
  ) : (
    <>
      <main>
        <p>You need to sign in</p>
      </main>
    </>
  )
}

export default Home
