import { get, post, put, del } from '../utils/client'
import {
  subcategoriesEndpoint,
  subcategoryEndpoint
} from '../config/api'

export const requestSubcategories = async (body) => {
  try {
    const response = await get(subcategoriesEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestAddSubcategory = async (body) => {
  try {
    const response = await post(subcategoriesEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestChangeSubcategory = async (body) => {
  try {
    const response = await put(subcategoryEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestDeleteSubcategory = async (body) => {
  try {
    const response = await del(subcategoryEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}