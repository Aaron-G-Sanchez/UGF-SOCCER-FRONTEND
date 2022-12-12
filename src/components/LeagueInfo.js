const LeagueInfo = ({ user, selectedLeague }) => {
  return (
    <>
      <section className="league-creator-info">
        <h1>{selectedLeague?.league.name}</h1>
        {user?.id !== selectedLeague?.league.creator_id._id ? (
          <button className="join-league-button">Join</button>
        ) : null}
      </section>
    </>
  )
}

export default LeagueInfo
