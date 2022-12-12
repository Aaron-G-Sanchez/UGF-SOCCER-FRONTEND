import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateLeague, GetLeague } from '../services/Queries'

const NewLeagueModal = ({ user, isActive, setIsActive, getLeague }) => {
  let navigate = useNavigate()

  const initialState = { name: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newLeague = await CreateLeague(formValues.name, user.id)
    setFormValues(initialState)
    setIsActive(!isActive)
    getLeague()
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <h3>League Name</h3>
          <h1>(WILL BE TURNED INTO A MODAL)</h1>
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
