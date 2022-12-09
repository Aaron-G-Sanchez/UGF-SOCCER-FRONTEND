import Login from '../components/Login'

const Landing = ({ setUser }) => {
  return (
    <>
      <main className="landing-page">
        <section className="title-wrapper">
          <h1 className="title">UGF SOCCER.</h1>
        </section>
        <section className="login">
          <Login setUser={setUser} />
        </section>
      </main>
    </>
  )
}

export default Landing
