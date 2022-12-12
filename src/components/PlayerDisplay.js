import PlayerCard from './PlayerCard'

const PlayerDisplay = ({ players }) => {
  return (
    <>
      <section className="player-display">
        <h1> Players </h1>
        <div className="player-wrapper">
          {players
            ? players.players.map((player) => (
                <PlayerCard
                  key={player._id}
                  player={player.name}
                  position={player.position}
                  number={player.number}
                  team={player.team}
                />
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default PlayerDisplay
