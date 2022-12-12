import PlayerInfo from './PlayerInfo'

const PlayerCard = ({ player }) => {
  return (
    <>
      <div className="player-card">
        <p className="player-name">{player}</p>
      </div>
    </>
  )
}

export default PlayerCard
