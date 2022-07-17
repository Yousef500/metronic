import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
  name: 'languaeg',
  initialState: {
    lang: 'eng',
  },
  reducers: {
    toggleLanguage: (state) => {
      if (state.lang === 'eng') {
        state.lang = 'ar'
      } else {
        state.lang = 'eng'
      }
    },
  },
})

export const {toggleLanguage} = languageSlice.actions

export default languageSlice.reducer
