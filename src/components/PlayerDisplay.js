import { AddPlayer } from '../services/Queries'
import PlayerCard from './PlayerCard'

const PlayerDisplay = ({ user, players, setSelectedTeam, selectedTeam }) => {
  const handleClick = async (player_id) => {
    const response = await AddPlayer(selectedTeam?._id, player_id)
    setSelectedTeam(response.team)
  }

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
                  handleClick={handleClick}
                />
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default PlayerDisplay
