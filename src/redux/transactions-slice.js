import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  requestTransactions,
  requestAddTransaction,
  requestChangeTransaction,
  requestDeleteTransaction
} from '../services/transactions'

const initialState = {
  isLoading: false,
  error: null,
  transactions: [],
  pagination: {},
  message: null
}

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (body, { rejectWithValue }) => {
    const data = await requestTransactions(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchAddTransaction = createAsyncThunk(
  'transactions/fetchAddTransaction',
  async (body, { rejectWithValue }) => {
    const data = await requestAddTransaction(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchChangeTransaction = createAsyncThunk(
  'transactions/fetchChangeTransaction',
  async (body, { rejectWithValue }) => {
    const data = await requestChangeTransaction(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchDeleteTransaction = createAsyncThunk(
  'transactions/fetchDeleteTransaction',
  async (body, { rejectWithValue }) => {
    const data = await requestDeleteTransaction(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload.transactions
        state.pagination = action.payload.pagination
        state.isLoading = false
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchAddTransaction.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchAddTransaction.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(fetchAddTransaction.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchChangeTransaction.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchChangeTransaction.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(fetchChangeTransaction.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchDeleteTransaction.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchDeleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false
        state.message = action.payload.message
      })
      .addCase(fetchDeleteTransaction.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
  }
})

export const transactionsReducer = transactionsSlice.reducer

//TODO: check
//TODO: add skeleton