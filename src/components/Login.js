const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <section className="login-wrapper">
        <h2 className="login-header">Login</h2>
        <form className="form-body" onSubmit={onSubmit}>
          <input
            className="email"
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            className="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default Login
