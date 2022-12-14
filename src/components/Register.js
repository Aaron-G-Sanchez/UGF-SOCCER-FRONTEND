import { useState } from 'react'
import { RegisterUsers } from '../services/Auth'

const Register = ({ setToggle }) => {
  const initialState = {
    first: '',
    last: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await RegisterUsers({
      name: `${formValues.first} ${formValues.last}`,
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    console.log(response)
    setFormValues(initialState)
    setToggle(true)
  }
  return (
    <>
      <section className="register-wrapper">
        <h2 className="register-header">Register</h2>
        <form className="register-body" onSubmit={handleSubmit}>
          <div className="name-wrapper">
            <input
              onChange={handleChange}
              className="first"
              name="first"
              type="text"
              placeholder="First Name"
              value={formValues.first}
            />
            <input
              onChange={handleChange}
              className="last"
              name="last"
              type="text"
              placeholder="Last Name"
              value={formValues.last}
            />
          </div>
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
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={formValues.confirmPassword}
          />

          <button
            type="submit"
            className="register-submit"
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Register
