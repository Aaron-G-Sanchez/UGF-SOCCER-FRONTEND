import PlayerInfo from './PlayerInfo'
import { useState } from 'react'
const PlayerCard = ({
  user,
  player,
  position,
  number,
  team,
  id,
  selectedTeam
}) => {
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
        user={user}
        isActive={isActive}
        position={position}
        number={number}
        team={team}
        id={id}
        selectedTeam={selectedTeam}
      />
    </>
  )
}

export default PlayerCard
