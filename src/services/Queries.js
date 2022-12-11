import Client from './API'

export const GetUserData = async (id) => {
  try {
    const response = await Client.get(`/user/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetLeague = async () => {
  try {
    const response = await Client.get('/league')
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetLeagueById = async (id) => {
  try {
    const response = await Client.get(`/league/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const CreateLeague = async (name, creator_id) => {
  try {
    const response = await Client.post('/league', { name, creator_id })
    return response.data
  } catch (error) {
    throw error
  }
}
