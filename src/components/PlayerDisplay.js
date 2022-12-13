import PlayerCard from './PlayerCard'

const PlayerDisplay = ({ user, players, selectedTeam }) => {
  return (
    <>
      <section className="player-display">
        <h1> Players </h1>
        <div className="player-wrapper">
          {players
            ? players.players.map((player) => (
                <PlayerCard
                  user={user}
                  key={player._id}
                  player={player.name}
                  position={player.position}
                  number={player.number}
                  team={player.team}
                  id={player._id}
                  selectedTeam={selectedTeam}
                />
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default PlayerDisplay
