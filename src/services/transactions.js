import { get, post, put, del } from '../utils/client'
import {
  transactionsEndpoint,
  transactionEndpoint
} from '../config/api'

export const requestTransactions = async (body) => {
  try {
    const response = await get(transactionsEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestAddTransaction = async (body) => {
  try {
    const response = await post(transactionsEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestChangeTransaction = async (body) => {
  try {
    const response = await put(transactionEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}

export const requestDeleteTransaction = async (body) => {
  try {
    const response = await del(transactionEndpoint, body)
    return response.data
  } catch (error) {
    return {
      hasError: true,
      ...error
    }
  }
}