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
