import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth-slice'
import { profileReducer } from './profile-slice'
import { limitsReducer } from './limits-slice'
import { categoriesReducer } from './categories-slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    limits: limitsReducer,
    categories: categoriesReducer
  },
})