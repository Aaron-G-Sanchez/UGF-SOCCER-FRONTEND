import { useNavigate } from 'react-router-dom'

const LeagueDisplay = ({ user, league }) => {
  let navigate = useNavigate()
  // as a test this fucntion looks at the logged in user and the creator of the league to see if the ids are the same
  // if (user.id === league.leagues[0].creator_id) {
  //   console.log(`${user.id} created this league`)
  // } else {
  //   console.log('looking for creator')
  // }

  const selectLeague = (id) => {
    navigate(`/league/${id}`)
  }

  return (
    <>
      <section className="league-display">
        <h2 className="league-display-title">Leagues</h2>
        <div className="leagues-wrapper">
          {league
            ? league.leagues.map((league) => (
                <div
                  className="league-card"
                  key={league._id}
                  onClick={() => selectLeague(league._id)}
                >
                  <p className="league-name">{league.name}</p>
                  <p className="league-creator">{`Created by: ${league.creator_id.name}`}</p>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default LeagueDisplay
