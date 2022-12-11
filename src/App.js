import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import League from './pages/League'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CheckSession } from './services/Auth'

const App = () => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [league, setLeague] = useState(null)
  const [selectedLeague, setSelectedLeague] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} />} />
        <Route
          path="/home"
          element={
            <Home
              user={user}
              league={league}
              setLeague={setLeague}
              userData={userData}
              setUserData={setUserData}
            />
          }
        />
        <Route
          path="/league/:id"
          element={
            <League
              selectedLeague={selectedLeague}
              setSelectedLeague={setSelectedLeague}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
