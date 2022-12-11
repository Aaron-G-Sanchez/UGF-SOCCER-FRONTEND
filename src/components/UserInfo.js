const UserInfo = ({ userData }) => {
  return (
    <>
      <section className="user-display">
        <h2>{userData?.user.name}</h2>
        <h3>{userData?.user.username}</h3>
      </section>
    </>
  )
}

export default UserInfo
