import PlayerInfo from './PlayerInfo'
import { useState } from 'react'
const PlayerCard = ({ player }) => {
  const [isActive, setIsActive] = useState(false)

  const selectPlayer = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="player-card" onClick={() => selectPlayer()}>
        <p className="player-name">{player}</p>
        <PlayerInfo isActive={isActive} />
      </div>
    </>
  )
}

export default PlayerCard
