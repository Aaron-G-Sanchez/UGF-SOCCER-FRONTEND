const TeamDisplay = ({ selectedTeam }) => {
  return (
    <>
      <section className="team-display">
        {selectedTeam ? <div>{selectedTeam.name}</div> : null}
        <div className="players-wrapper">
          {selectedTeam
            ? selectedTeam.players.map((player) => (
                <div key={player._id} className="player-badge">
                  <h2>{player.name}</h2>
                  <p># {player.number}</p>
                  <p>{player.position}</p>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default TeamDisplay
