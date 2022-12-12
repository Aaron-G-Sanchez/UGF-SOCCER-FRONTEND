import { AddMembers } from '../services/Queries'

const LeagueInfo = ({ user, selectedLeague, id, getLeagueById }) => {
  // console.log(user.id)
  const joinLeague = async () => {
    const response = await AddMembers(id, user.id)
    getLeagueById(id)
  }

  return (
    <>
      <section className="league-creator-info">
        <h1>{selectedLeague?.league.name}</h1>
        {user?.id !== selectedLeague?.league.creator_id._id ? (
          <button className="join-league-button" onClick={joinLeague}>
            Join
          </button>
        ) : null}
      </section>
    </>
  )
}

export default LeagueInfo
