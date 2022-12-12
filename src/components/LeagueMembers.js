const LeagueMembers = ({ selectedLeague }) => {
  return (
    <>
      <section className="league-members-display">
        <h2>Members</h2>
        <div className="members-wrapper">
          {selectedLeague
            ? selectedLeague?.league.members_id.map((member) => (
                <div key={member._id}>
                  <p>{member.name}</p>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}

export default LeagueMembers
