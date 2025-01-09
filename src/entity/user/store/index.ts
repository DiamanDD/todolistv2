import { createSlice, isPending, isRejected } from '@reduxjs/toolkit'
import { authMe, signIn } from '../api'
import { removeAuthTokenInLocalStorage } from '@/shared'

const initialState = {
  isAuthorize: false,
  isInitialized: false,
  isLoading: false,
  firstName: '',
  lastName: '',
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      removeAuthTokenInLocalStorage()
      //Todo правильно зачищать стейт
      state.isAuthorize = false
      state.lastName = ''
      state.firstName = ''
    },
  },
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

export const { logOut } = userSlice.actions
