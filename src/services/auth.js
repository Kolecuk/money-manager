import { post } from '../utils/client'
import {
  signInEndpoint,
  signUpEndpoint,
  forgotPasswordEndpoint,
  resetPasswordEndpoint,
  testEmailEndpoint
} from '../config/api'

export const requestSignIn = async (body) => {
  try {
    const response = await post(signInEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestSignUp = async (body) => {
  try {
    const response = await post(signUpEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestForgotPassword = async (body) => {
  try {
    const response = await post(forgotPasswordEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestResetPassword = async (body) => {
  try {
    const response = await post(resetPasswordEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestTestEmail = async (body) => {
  try {
    const response = await post(testEmailEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}