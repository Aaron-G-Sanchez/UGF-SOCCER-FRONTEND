const PlayerInfo = ({
  user,
  isActive,
  position,
  number,
  team,
  id,
  selectedTeam,
  handleClick
}) => {
  return isActive ? (
    <>
      <div className="player-info">
        <p>#{number}</p>
        <p>{position}</p>
        <p>{team}</p>
        {user?.id === selectedTeam?.creator_id ? (
          <button onClick={() => handleClick(id)}>Add to team</button>
        ) : null}
      </div>
    </>
  ) : null
}

export default PlayerInfo
