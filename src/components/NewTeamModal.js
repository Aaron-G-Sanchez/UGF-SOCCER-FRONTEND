import { useState } from 'react'

const NewTeamModal = ({ setIsActive }) => {
  const initialState = { name: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

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
              <input
                onChange={handleChange}
                className="form-team-name"
                name="name"
                type="text"
                value={formValues.name}
                placeholder="Team Name"
              />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewTeamModal
