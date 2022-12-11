import { useEffect } from 'react'
import LeagueDisplay from '../components/LeagueDisplay'
import UserInfo from '../components/UserInfo'
import { GetLeague, GetUserData } from '../services/Queries'

const Home = ({ user, league, setLeague, userData, setUserData }) => {
  const getLeague = async () => {
    const league = await GetLeague()
    setLeague(league)
  }

  const getUserData = async () => {
    if (user) {
      let id = user.id
      const response = await GetUserData(id)
      setUserData(response)
    }
  }

  useEffect(() => {
    getLeague()
    getUserData()
  }, [user])

  return user ? (
    <>
      <main className="home-dash">
        <UserInfo />
        <LeagueDisplay user={user} league={league} />
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
