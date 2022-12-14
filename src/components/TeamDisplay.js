import { RemovePlayer } from '../services/Queries'

const TeamDisplay = ({ selectedTeam }) => {
  const handleClick = async (id) => {
    // console.log(selectedTeam?._id)
    // console.log(id)

    const response = await RemovePlayer(selectedTeam?._id, id)
    console.log(response)
  }

  console.log(selectedTeam)
  return (
    <>
      <section className="team-display">
        {selectedTeam ? <div>{selectedTeam.name}</div> : null}
        <div className="players-wrapper">
          {selectedTeam
            ? selectedTeam.players.map((player) => (
                <div key={player._id} className="player-badge">
                  <h2 className="team-player-name">{player.name}</h2>
                  <p className="player-number"># {player.number}</p>
                  <p className="player-position">{player.position}</p>
                  <button
                    className="remove-player"
                    onClick={() => handleClick(player._id)}
                  >
                    X
                  </button>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default TeamDisplay
