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

export const GetPlayers = async () => {
  try {
    const response = await Client.get('/players')
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

//Try returning the response.data here and taking away the function call in the component
export const AddMembers = async (id, newMember) => {
  try {
    const response = await Client.put(`league/${id}`, { newMember })
  } catch (error) {
    throw error
  }
}

export const AddPlayer = async (id, newPlayers) => {
  try {
    const response = await Client.put(`/team`, { id, newPlayers })
    return response.data
  } catch (error) {
    throw error
  }
}
