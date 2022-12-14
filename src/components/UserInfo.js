import { useNavigate } from 'react-router-dom'
const UserInfo = ({ userData, handleLogout }) => {
  let navigate = useNavigate()

  const logout = () => {
    handleLogout()
    navigate('/')
  }

  return (
    <>
      <section className="user-display">
        <h2>{userData?.user.name}</h2>
        <h3>{userData?.user.username}</h3>
        <button onClick={logout}>Log Out</button>
      </section>
    </>
  )
}

export default UserInfo
