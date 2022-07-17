import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './slices/langSlice'

export default configureStore({
  reducer: {
    language: languageReducer,
  },
})
