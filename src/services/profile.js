import { get, put } from '../utils/client'
import { profileEndpoint } from '../config/api'

export const requestProfile = async (body) => {
  try {
    const response = await get(profileEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestChangeProfile = async (body) => {
  try {
    const response = await put(profileEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}