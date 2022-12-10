const LeagueDisplay = ({ league }) => {
  console.log(league.leagues)

  return (
    <>
      <section className="league-display">
        {league
          ? league.leagues.map((league) => (
              <div key={league._id}>{league.name}</div>
            ))
          : null}
      </section>
    </>
  )
}

export default LeagueDisplay
