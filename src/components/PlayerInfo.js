const PlayerInfo = ({ isActive, position, number, team, id }) => {
  const handleClick = (id) => {
    console.log(id)
  }
  return isActive ? (
    <>
      <div className="player-info">
        <p>#{number}</p>
        <p>{position}</p>
        <p>{team}</p>

        <button onClick={() => handleClick(id)}>add to team</button>
      </div>
    </>
  ) : null
}

export default PlayerInfo
