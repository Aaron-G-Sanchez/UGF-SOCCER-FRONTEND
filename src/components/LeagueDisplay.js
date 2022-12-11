const LeagueDisplay = ({ user, league }) => {
  // as a test this fucntion looks at the logged in user and the creator of the league to see if the ids are the same
  if (user.id === league.leagues[0].creator_id) {
    console.log(`${user.id} created this league`)
  } else {
    console.log('looking for creator')
  }

  return (
    <>
      <section className="league-display">
        <h2 className="league-display-title">Leagues</h2>
        {league
          ? league.leagues.map((league) => (
              <div className="league-card" key={league._id}>
                <p>{league.name}</p>
              </div>
            ))
          : null}
      </section>
    </>
  )
}

export default LeagueDisplay
