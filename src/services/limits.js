import { get, post } from '../utils/client'
import {
  limitsEndpoint,
  checkLimitsEndpoint
} from '../config/api'

export const requestLimits = async (body) => {
  try {
    const response = await get(limitsEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestAddLimits = async (body) => {
  try {
    const response = await post(limitsEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestCheckLimits = async (body) => {
  try {
    const response = await get(checkLimitsEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}