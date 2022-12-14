import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = ({ setToggle }) => {
  let navigate = useNavigate()
  const initialState = { email: '', username: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormValues(initialState)
    navigate('/')
  }
  return (
    <>
      <section className="register-wrapper">
        <h2 className="register-header">Register</h2>
        <form className="form-body" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
          />
          <input
            onChange={handleChange}
            className="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formValues.username}
          />
          <input
            onChange={handleChange}
            className="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formValues.password}
          />
          <input
            onChange={handleChange}
            className="password"
            name="password"
            type="password"
            placeholder="Confirm password"
            value={formValues.password}
          />

          <button type="submit" className="register-submit">
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Register
