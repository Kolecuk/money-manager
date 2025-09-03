import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  requestLimits,
  requestAddLimits,
  requestCheckLimits
} from '../services/limits'

const initialState = {
  isLoading: false,
  error: null,
  limits: [],
  hasLimit: false,
  limit: {},
  spending: {},
  status: null,
  message: null
}

export const fetchLimits = createAsyncThunk(
  'limits/fetchLimits',
  async (body, { rejectWithValue }) => {
    const data = await requestLimits(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchAddLimits = createAsyncThunk(
  'limits/fetchAddLimits',
  async (body, { rejectWithValue }) => {
    const data = await requestAddLimits(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchCheckLimits = createAsyncThunk(
  'limits/fetchCheckLimits',
  async (body, { rejectWithValue }) => {
    const data = await requestCheckLimits(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const limitsSlice = createSlice({
  name: 'limits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLimits.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchLimits.fulfilled, (state, action) => {
        state.limits = action.payload
        state.isLoading = false
      })
      .addCase(fetchLimits.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchAddLimits.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchAddLimits.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(fetchAddLimits.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchCheckLimits.pending, (state) => {
        state.error = null
        state.isLoading = true
        state.hasLimit = false
      })
      .addCase(fetchCheckLimits.fulfilled, (state, action) => {
        state.hasLimit = action.payload.hasLimit
        state.limit = action.payload.limit
        state.spending = action.payload.spending
        state.status = action.payload.status
        state.message = action.payload.message
        state.isLoading = false
      })
      .addCase(fetchCheckLimits.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
  }
})

export const limitsReducer = limitsSlice.reducer

//TODO: check
//TODO: add skeleton