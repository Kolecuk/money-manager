import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  requestCategories,
  requestAddCategory,
  requestChangeCategory,
  requestDeleteCategory
} from '../services/categories'

const initialState = {
  isLoading: false,
  error: null,
  categories: [],
  message: null
}

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (body, { rejectWithValue }) => {
    const data = await requestCategories(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchAddCategory = createAsyncThunk(
  'categories/fetchAddCategory',
  async (body, { rejectWithValue }) => {
    const data = await requestAddCategory(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchChangeCategory = createAsyncThunk(
  'categories/fetchChangeCategory',
  async (body, { rejectWithValue }) => {
    const data = await requestChangeCategory(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchDeleteCategory = createAsyncThunk(
  'categories/fetchDeleteCategory',
  async (body, { rejectWithValue }) => {
    const data = await requestDeleteCategory(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.isLoading = false
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchAddCategory.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchAddCategory.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(fetchAddCategory.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchChangeCategory.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchChangeCategory.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(fetchChangeCategory.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchDeleteCategory.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchDeleteCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.message = action.payload.message
      })
      .addCase(fetchDeleteCategory.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
  }
})

export const categoriesReducer = categoriesSlice.reducer

//TODO: check
//TODO: add skeleton