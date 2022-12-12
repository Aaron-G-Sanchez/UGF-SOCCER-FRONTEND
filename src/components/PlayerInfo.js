const PlayerInfo = ({ isActive, setIsActive }) => {
  return isActive ? (
    <>
      <div>player info will go here</div>
      <button>add to team</button>
    </>
  ) : null
}

export default PlayerInfo
