const Home = ({ user }) => {
  return user ? (
    <>
      <div>{user.id}</div>
    </>
  ) : (
    <>
      <div>
        <p>You need to sign in</p>
      </div>
    </>
  )
}

export default Home
