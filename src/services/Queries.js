import Client from './API'

export const GetLeague = async () => {
  try {
    const response = await Client.get('/league')
    return response.data
  } catch (error) {
    throw error
  }
}
