import { useEffect, useState } from 'react'
import LeagueDisplay from '../components/LeagueDisplay'
import NewLeagueModal from '../components/NewLeagueModal'
import UserInfo from '../components/UserInfo'
import { GetLeague, GetUserData } from '../services/Queries'

const Home = ({
  user,
  league,
  setLeague,
  userData,
  setUserData,
  selectedLeague,
  setSelectedLeague,
  setSelectedTeam,
  handleLogout
}) => {
  const [isActive, setIsActive] = useState(false)

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
        <UserInfo userData={userData} handleLogout={handleLogout} />
        <LeagueDisplay
          league={league}
          setSelectedTeam={setSelectedTeam}
          setIsActive={setIsActive}
        />

        {isActive ? (
          <NewLeagueModal
            user={user}
            selectedLeague={selectedLeague}
            setSelectedLeague={setSelectedLeague}
            setIsActive={setIsActive}
            getLeague={getLeague}
          />
        ) : null}
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
