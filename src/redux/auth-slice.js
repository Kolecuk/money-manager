import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  requestSignIn,
  requestSignUp,
  requestForgotPassword,
  requestResetPassword,
  requestTestEmail
} from '../services/auth'
import { jwt } from '../utils/jwt'

const initialState = {
  userId: null,
  isLoading: false,
  error: null,
  message: null,
  expireDate: null,
  jwt: jwt.getFromLocalStorage() || {},
  currentUser: {}
}

export const fetchSignIn = createAsyncThunk(
  'auth/fetchSignIn',
  async (body, { rejectWithValue }) => {
    const data = await requestSignIn(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    jwt.setToLocalStorage(data.token)

    return data
  })

export const fetchSignUp = createAsyncThunk(
  'auth/fetchSignUp',
  async (body, { rejectWithValue }) => {
    const data = await requestSignUp(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchForgotPassword = createAsyncThunk(
  'auth/fetchForgotPassword',
  async (body, { rejectWithValue }) => {
    const data = await requestForgotPassword(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchResetPassword = createAsyncThunk(
  'auth/fetchResetPassword',
  async (body, { rejectWithValue }) => {
    const data = await requestResetPassword(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchTestEmail = createAsyncThunk(
  'auth/fetchTestEmail',
  async (body, { rejectWithValue }) => {
    const data = await requestTestEmail(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state) => {
      state.jwt = {}
      state.currentUser = {}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignIn.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.jwt = action.payload.token
        state.currentUser = action.payload.user
        state.isLoading = false
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchSignUp.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        state.message = action.payload.message
        state.userId = action.payload.user_id
        state.isLoading = false
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.error = action.payload.response.data
        state.isLoading = false
      })
      .addCase(fetchForgotPassword.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchForgotPassword.fulfilled, (state, action) => {
        state.message = action.payload.message
        state.expireDate = action.payload.expires_at
        state.isLoading = false
      })
      .addCase(fetchForgotPassword.rejected, (state, action) => {
        state.error = action.payload.response.data
        state.isLoading = false
      })
      .addCase(fetchResetPassword.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchResetPassword.fulfilled, (state, action) => {
        state.message = action.payload.message
        state.isLoading = false
      })
      .addCase(fetchResetPassword.rejected, (state, action) => {
        state.error = action.payload.response.data
        state.isLoading = false
      })
      .addCase(fetchTestEmail.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchTestEmail.fulfilled, (state, action) => {
        state.message = action.payload.message
        state.isLoading = false
      })
      .addCase(fetchTestEmail.rejected, (state, action) => {
        state.error = action.payload.response.data
        state.isLoading = false
      })
  }
})

export const { signOut } = authSlice.actions

export const authReducer = authSlice.reducer

//TODO: userId is it necessary ?
//TODO: add skeleton

// username: user888;
// email: user888@example.com
// password: password888

// {
//   "success": true,
//   "message": "User registered successfully",
//   "user_id": 51
// }

// token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNTEiLCJ1c2VybmFtZSI6InVzZXI4ODgiLCJhcHBfa2V5IjoiYXBwNV82OGExOTJmZmUwMDIwIiwiaWF0IjoxNzU2MzMyNjExLCJleHAiOjE3NTY5Mzc0MTF9.XeFJNstrpNmqPfzLlRVFcNTidoIxjxnMrK6iJnoqQv4"