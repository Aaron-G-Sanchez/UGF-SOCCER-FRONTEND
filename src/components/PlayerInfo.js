const PlayerInfo = ({
  user,
  isActive,
  position,
  number,
  team,
  id,
  selectedTeam
}) => {
  const handleClick = (id) => {
    console.log(id)
  }

  console.log(selectedTeam)
  return isActive ? (
    <>
      <div className="player-info">
        <p>#{number}</p>
        <p>{position}</p>
        <p>{team}</p>
        {user?.id === selectedTeam?.creator_id ? (
          <button>Add to team</button>
        ) : null}
      </div>
    </>
  ) : null
}

export default PlayerInfo
