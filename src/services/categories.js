import { get, post, put, del } from '../utils/client'
import {
  categoriesEndpoint,
  categoryEndpoint
} from '../config/api'

export const requestCategories = async (body) => {
  try {
    const response = await get(categoriesEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestAddCategories = async (body) => {
  try {
    const response = await post(categoriesEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestChangeCategory = async (body) => {
  try {
    const response = await put(categoryEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestDeleteCategory = async (body) => {
  try {
    const response = await del(categoryEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}