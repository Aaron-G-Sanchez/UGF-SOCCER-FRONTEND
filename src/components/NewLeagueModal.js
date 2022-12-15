import { useState } from 'react'
import { CreateLeague, GetLeague } from '../services/Queries'

const NewLeagueModal = ({ user, setIsActive, getLeague }) => {
  const initialState = { name: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newLeague = await CreateLeague(formValues.name, user.id)
    setFormValues(initialState)
    setIsActive(false)
    getLeague()
  }

  return (
    <>
      <section className="new-league-modal">
        <div className="modal-content">
          <h1>League Name</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className="form-league-name"
              name="name"
              type="text"
              value={formValues.name}
              placeholder="Name"
            />
            <div className="modal-controls">
              <button onClick={() => setIsActive(false)}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default NewLeagueModal
