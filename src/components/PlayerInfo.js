const PlayerInfo = ({ isActive, position, number, team }) => {
  return isActive ? (
    <>
      <div className="player-info">
        <p>{number}</p>
        <p>{position}</p>
        <p>{team}</p>
        <button>add to team</button>
      </div>
    </>
  ) : null
}

export default PlayerInfo
