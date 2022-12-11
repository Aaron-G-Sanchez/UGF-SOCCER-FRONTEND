import { useState } from 'react'
import { CreateLeague } from '../services/Queries'

const NewLeagueModal = ({ user }) => {
  const initialState = { name: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newLeague = await CreateLeague(formValues.name, user.id)
    console.log(newLeague)
    setFormValues(initialState)
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <h3>League Name</h3>
          <input
            onChange={handleChange}
            className="form-league-name"
            name="name"
            type="text"
            value={formValues.name}
            placeholder="Name"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default NewLeagueModal
