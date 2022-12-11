import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetLeagueById } from '../services/Queries'

const League = ({ selectedLeague, setSelectedLeague }) => {
  let { id } = useParams()

  // currently works until the page is refreshed
  // const getLeague = (id) => {
  //   console.log(league?.leagues.find((league) => league._id === id))
  // }

  const getLeague = async (id) => {
    const response = await GetLeagueById(id)
    setSelectedLeague(response)
  }

  useEffect(() => {
    getLeague(id)
  }, [])

  return (
    <>
      <main className="league-display">
        <section>
          <h1>{selectedLeague?.league.name}</h1>
        </section>
      </main>
    </>
  )
}

export default League
