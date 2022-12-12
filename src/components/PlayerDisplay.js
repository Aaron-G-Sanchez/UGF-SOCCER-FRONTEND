const PlayerDisplay = ({ players }) => {
  return (
    <>
      <section className="player-display">
        <h1> Players </h1>
        <div className="player-wrapper">
          {players
            ? players.players.map((player) => (
                <div key={player._id} className="player-card">
                  <p className="player-name">{player.name}</p>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default PlayerDisplay
