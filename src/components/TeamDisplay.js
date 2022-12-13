import { useEffect, useState } from 'react'

const TeamDisplay = ({ selectedTeam }) => {
  return (
    <>
      <section className="team-display">
        {selectedTeam ? <div>{selectedTeam.name}</div> : null}
      </section>
    </>
  )
}

export default TeamDisplay
