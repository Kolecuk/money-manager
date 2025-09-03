import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  requestStatistics
} from '../services/statistics'

const initialState = {
  isLoading: false,
  error: null,
  totals: {},
  expensesByCategory: [],
  incomeByCategory: [],
  monthlyBreakdown: []
}

export const fetchStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async (body, { rejectWithValue }) => {
    const data = await requestStatistics(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.totals = action.payload.totals
        state.expensesByCategory = action.payload.expenses_by_category
        state.incomeByCategory = action.payload.income_by_category
        state.monthlyBreakdown = action.payload.monthly_breakdown
        state.isLoading = false
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
  }
})

export const statisticsReducer = statisticsSlice.reducer

//TODO: check
//TODO: add skeleton