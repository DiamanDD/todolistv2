import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance, setAuthTokenInLocalStorage } from '@/shared'
import { User } from '@/types'
import { authMe } from '@/entity/user/api/authMe.ts'

export interface SigInReq {
  username: string
  password: string
}

export const signIn = createAsyncThunk<User, SigInReq>(
  'user/signIn',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiInstance.post<User>('/users/login', params)
      setAuthTokenInLocalStorage(result.data.access_token)
      dispatch(authMe())
      return result.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
