import { useEffect, useState } from 'react'

const TeamDisplay = ({ user, teams }) => {
  // if (teams && user) {
  //   let { id } = user
  //   // console.log(teams)
  //   // console.log(id)
  //   let usersTeam = teams.find((team) => team.creator_id === id)
  //   console.log(usersTeam)
  // }

  return (
    <>
      <section className="team-display">
        {/* {teams ? teams.map((team) => <div>{team.name}</div>) : null} */}
      </section>
    </>
  )
}

export default TeamDisplay
