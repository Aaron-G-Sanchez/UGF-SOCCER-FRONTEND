import { AddMembers } from '../services/Queries'
import { useNavigate } from 'react-router-dom'

const LeagueInfo = ({
  user,
  selectedLeague,
  id,
  getLeagueById,
  toggle,
  selectedTeam,
  setIsOpen
}) => {
  let navigate = useNavigate()

  const joinLeague = async () => {
    const response = await AddMembers(id, user.id)
    getLeagueById(id)
  }

  const showDeleteTeamModal = () => {
    setIsOpen(true)
  }

  const navBack = () => {
    navigate(-1)
  }
  // need to work on the toggle functionality so the join button doesnt display if the user has already joined the league

  return (
    <>
      <section className="league-creator-info">
        <div className="back-button-wrapper">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={navBack}
            className="back-arrow"
          >
            <path
              d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
              fill="currentColor"
            />
          </svg>
        </div>
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
