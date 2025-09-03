import { get } from '../utils/client'
import {
  statisticsEndpoint
} from '../config/api'

export const requestStatistics = async (body) => {
  try {
    const response = await get(statisticsEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}