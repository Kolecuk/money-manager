import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth-slice'
import { profileReducer } from './profile-slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
})