import { createSlice, isPending, isRejected } from '@reduxjs/toolkit'
import { signIn, authMe } from '../api'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthorize: false,
    isInitialized: false,
    isLoading: false,
    firstName: '',
    lastName: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(authMe.fulfilled, (state, action) => {
        if (action.payload) {
          state.firstName = action.payload.first_name
          state.lastName = action.payload.last_name
          state.isAuthorize = true
        }
        state.isLoading = false
        state.isInitialized = true
      })
      .addMatcher(isPending(authMe, signIn), (state) => {
        state.isLoading = true
      })
      .addMatcher(isRejected(authMe, signIn), (state) => {
        state.isLoading = false
        state.isInitialized = true
      })
  },
})
