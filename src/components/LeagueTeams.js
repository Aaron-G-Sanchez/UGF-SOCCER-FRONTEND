const LeagueTeams = ({ teams }) => {
  return (
    <>
      <section className="league-teams-display">
        <h2 className="team-header">Teams</h2>
        <div className="teams-wrapper">
          {teams
            ? teams.map((team) => <div className="team-card">{team.name}</div>)
            : null}
        </div>
      </section>
    </>
  )
}

export default LeagueTeams
