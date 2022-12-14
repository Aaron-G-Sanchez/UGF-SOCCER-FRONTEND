import { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

const Landing = ({ setUser }) => {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <main className="landing-page">
        <section className="title-wrapper">
          <h1 className="title">UGF SOCCER.</h1>
        </section>
        {toggle ? (
          <section className="login">
            <Login setUser={setUser} setToggle={setToggle} />
          </section>
        ) : (
          <section className="register">
            <Register setToggle={setToggle} />
          </section>
        )}
      </main>
    </>
  )
}

export default Landing
