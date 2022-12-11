import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const Login = ({ setUser }) => {
  let navigate = useNavigate()
  const initialState = { email: '', username: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues(initialState)
    navigate('/home')
  }

  return (
    <>
      <section className="login-wrapper">
        <h2 className="login-header">Login</h2>
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
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default Login
