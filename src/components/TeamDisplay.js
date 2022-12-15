import { RemovePlayer } from '../services/Queries'

const TeamDisplay = ({ user, selectedTeam, setSelectedTeam }) => {
  const handleClick = async (id) => {
    const response = await RemovePlayer(selectedTeam?._id, id)
    setSelectedTeam(response.team)
  }

  return (
    <>
      <section className="team-display">
        {selectedTeam ? (
          <div className="team-name">
            <h2>{selectedTeam.name}</h2>
          </div>
        ) : null}
        <div className="players-wrapper">
          {selectedTeam
            ? selectedTeam.players?.map((player) => (
                <div key={player._id} className="player-badge">
                  <h2 className="team-player-name">{player.name}</h2>
                  <p className="player-number"># {player.number}</p>
                  <p className="player-position">{player.position}</p>

                  {user?.id === selectedTeam?.creator_id._id ? (
                    <button
                      className="remove-player"
                      onClick={() => handleClick(player?._id)}
                    >
                      X
                    </button>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default TeamDisplay
