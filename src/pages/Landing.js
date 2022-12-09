import Login from '../components/Login'

const Landing = () => {
  return (
    <>
      <main className="landing-page">
        <section className="title-wrapper">
          <h1 className="title">UGF SOCCER.</h1>
        </section>
        <section className="login">
          <Login />
        </section>
      </main>
    </>
  )
}

export default Landing
