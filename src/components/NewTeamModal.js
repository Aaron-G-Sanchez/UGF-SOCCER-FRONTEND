const NewTeamModal = ({ setIsActive }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsActive(false)
  }

  return (
    <>
      <section className="new-team-modal">
        <div className="modal-content">
          <h1>Team Name</h1>
          <div className="modal-form">
            <form onSubmit={handleSubmit}>
              <input placeholder="Team Name" />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewTeamModal
