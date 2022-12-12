import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetLeagueById } from '../services/Queries'

const League = ({ selectedLeague, setSelectedLeague }) => {
  let { id } = useParams()

  const getLeagueById = async (id) => {
    const response = await GetLeagueById(id)
    setSelectedLeague(response)
  }

  useEffect(() => {
    getLeagueById(id)
  }, [])

  console.log(selectedLeague)

  return (
    <>
      {/* TURN THIS SHI INTO components */}

      <main className="league-details">
        <section className="league-creator-info">
          <h1>{selectedLeague?.league.name}</h1>
        </section>
      </main>
    </>
  )
}

export default League
