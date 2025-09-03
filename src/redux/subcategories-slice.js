import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  requestSubcategories,
  requestAddSubcategory,
  requestChangeSubcategory,
  requestDeleteSubcategory
} from '../services/subcategories'

const initialState = {
  isLoading: false,
  error: null,
  subcategories: [],
  message: null
}

export const fetchSubcategories = createAsyncThunk(
  'subcategories/fetchSubcategories',
  async (body, { rejectWithValue }) => {
    const data = await requestSubcategories(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchAddSubcategory = createAsyncThunk(
  'subcategories/fetchAddSubcategory',
  async (body, { rejectWithValue }) => {
    const data = await requestAddSubcategory(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchChangeSubcategory = createAsyncThunk(
  'subcategories/fetchChangeSubcategory',
  async (body, { rejectWithValue }) => {
    const data = await requestChangeSubcategory(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const fetchDeleteSubcategory = createAsyncThunk(
  'subcategories/fetchDeleteSubcategory',
  async (body, { rejectWithValue }) => {
    const data = await requestDeleteSubcategory(body)

    if (data.hasError) {
      return rejectWithValue(data)
    }

    return data
  })

export const subcategoriesSlice = createSlice({
  name: 'subcategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubcategories.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchSubcategories.fulfilled, (state, action) => {
        state.subcategories = action.payload
        state.isLoading = false
      })
      .addCase(fetchSubcategories.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchAddSubcategory.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchAddSubcategory.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(fetchAddSubcategory.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchChangeSubcategory.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchChangeSubcategory.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(fetchChangeSubcategory.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
      .addCase(fetchDeleteSubcategory.pending, (state) => {
        state.error = null
        state.isLoading = true
      })
      .addCase(fetchDeleteSubcategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.message = action.payload.message
      })
      .addCase(fetchDeleteSubcategory.rejected, (state, action) => {
        state.error = action.payload.response.data.message
        state.isLoading = false
      })
  }
})

export const subcategoriesReducer = subcategoriesSlice.reducer

//TODO: check
//TODO: add skeleton