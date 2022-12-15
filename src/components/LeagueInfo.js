import { AddMembers } from '../services/Queries'

const LeagueInfo = ({
  user,
  selectedLeague,
  id,
  getLeagueById,
  toggle,
  selectedTeam,
  setIsOpen
}) => {
  const joinLeague = async () => {
    const response = await AddMembers(id, user.id)
    getLeagueById(id)
  }

  const showDeleteTeamModal = () => {
    setIsOpen(true)
  }

  // need to work on the toggle functionality so the join button doesnt display if the user has already joined the league

  return (
    <>
      <section className="league-creator-info">
        <h1>{selectedLeague?.league.name}</h1>
        {user?.id !== selectedLeague?.league.creator_id._id ? (
          <button className="join-league-button" onClick={joinLeague}>
            Join
          </button>
        ) : null}
        {user?.id === selectedTeam?.creator_id._id ? (
          <button className="delete-team-button" onClick={showDeleteTeamModal}>
            Delete Team
          </button>
        ) : null}
      </section>
    </>
  )
}

export default LeagueInfo
