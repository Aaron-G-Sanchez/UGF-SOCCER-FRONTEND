import './App.css'
import Landing from './pages/Landing'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)
  console.log(user)
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing setUser={setUser} />} />
      </Routes>
    </>
  )
}

export default App
