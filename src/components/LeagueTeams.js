const LeagueTeams = ({ teams, setSelectedTeam }) => {
  const getTeamId = async (id) => {
    if (teams) {
      setSelectedTeam(teams.find((team) => team._id === id))
    }
  }

  return (
    <>
      <section className="league-teams-display">
        {teams ? <h2 className="team-header">Teams</h2> : null}
        <div className="teams-wrapper">
          {teams
            ? teams.map((team) => (
                <div
                  className="team-card"
                  key={team._id}
                  onClick={() => getTeamId(team._id)}
                >
                  <p>{team.name}</p>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default LeagueTeams
