const NewTeamModal = () => {
  return (
    <>
      <section className="new-team-modal">
        <div className="modal-content">
          <h1>Team Name</h1>
          <div className="modal-form">
            <form>
              <input placeholder="Team Name" />
              <button>Save</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewTeamModal
