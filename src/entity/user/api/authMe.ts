import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance, getAuthToken } from '@/shared'
import { User } from '@/types'

export const authMe = createAsyncThunk<User | void, void>(
  'user/me',
  async (_, { rejectWithValue }) => {
    try {
      const token = getAuthToken()
      if (token) {
        const res = await apiInstance.get<User>('users/me')
        return res.data
      }
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
