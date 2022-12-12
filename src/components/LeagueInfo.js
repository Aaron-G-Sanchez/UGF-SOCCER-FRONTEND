const LeagueInfo = ({ selectedLeague }) => {
  return (
    <>
      <section className="league-creator-info">
        <h1>{selectedLeague?.league.name}</h1>
      </section>
    </>
  )
}

export default LeagueInfo
