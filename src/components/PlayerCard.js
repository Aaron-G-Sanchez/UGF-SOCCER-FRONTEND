import PlayerInfo from './PlayerInfo'
import { useState } from 'react'
const PlayerCard = ({ player, position, number, team }) => {
  const [isActive, setIsActive] = useState(false)

  const selectPlayer = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="player-card" onClick={() => selectPlayer()}>
        <p className="player-name">{player}</p>
      </div>
      <PlayerInfo
        isActive={isActive}
        position={position}
        number={number}
        team={team}
      />
    </>
  )
}

export default PlayerCard
