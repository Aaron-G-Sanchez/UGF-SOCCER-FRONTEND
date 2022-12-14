import Client from './API'

export const SignInUser = async (data) => {
  try {
    const response = await Client.post('/auth/login', data)
    localStorage.setItem('token', response.data.token)
    return response.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUsers = async ({ name, username, password, email }) => {
  try {
    const response = await Client.post('/auth/register', {
      name,
      username,
      password,
      email
    })
    return response.data
  } catch (error) {
    throw error
  }
}
export const CheckSession = async () => {
  try {
    const response = await Client.get('/auth/session')
    return response.data
  } catch (error) {
    throw error
  }
}
