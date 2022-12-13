import { useEffect, useState } from 'react'

const TeamDisplay = ({ selectedTeam }) => {
  console.log(selectedTeam)
  return (
    <>
      <section className="team-display">
        {selectedTeam ? <div>{selectedTeam.name}</div> : null}
        <div>
          {selectedTeam
            ? selectedTeam.players.map((player) => (
                <div key={player._id}>{player.name}</div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default TeamDisplay
