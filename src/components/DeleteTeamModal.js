import { DeleteTeam } from '../services/Queries'

const DeleteTeamModal = ({ setIsOpen, selectedTeam }) => {
  const deleteTeam = async () => {
    const response = await DeleteTeam(selectedTeam?._id)
    setIsOpen(false)
  }

  return (
    <>
      <section className="remove-team-modal">
        <div className="modal-content">
          <h2>Are you sure you want to remove this team?</h2>
          <button onClick={deleteTeam}>Remove</button>
        </div>
      </section>
    </>
  )
}

export default DeleteTeamModal
