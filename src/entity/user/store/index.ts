import { createSlice } from '@reduxjs/toolkit'
import { signIn } from '@/entity/user/api/signIn.ts'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthorize: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state) => {
      state.isAuthorize = true
    })
  },
})
