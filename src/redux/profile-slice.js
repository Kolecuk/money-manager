import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  requestProfile,
  requestChangeProfile
} from '../services/profile'

const initialState = {
  isLoading: false,
  error: null,
  currentUserProfile: {}
}

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (body, { rejectWithValue }) => {
    const data = await requestProfile(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchChangeProfile = createAsyncThunk(
  'profile/fetchChangeProfile',
  async (body, { rejectWithValue }) => {
    const data = await requestChangeProfile(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.currentUserProfile = action.payload
        state.isLoading = false
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchChangeProfile.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchChangeProfile.fulfilled, (state, action) => {
        state.currentUserProfile = action.payload
        state.isLoading = false
      })
      .addCase(fetchChangeProfile.rejected, (state, action) => {
        state.error = action.payload.response.data
        state.isLoading = false
      })
  }
})

export const profileReducer = profileSlice.reducer

//TODO: check fetchChangeProfile .fulfilled and .rejected
//TODO: add skeleton