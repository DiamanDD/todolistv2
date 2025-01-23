import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '@/shared'
import { TodolistType } from '@/types'

interface TodolistRequest {
  id: string
  title: string
  description: string
  created_at: string
  user_id: string
}

const converter = (data: TodolistRequest[]): TodolistType[] => {
  return data.map((el) => {
    const { created_at, user_id, ...rest } = el
    return { ...rest, createdAt: created_at, userId: user_id }
  })
}

export const getTodoLists = createAsyncThunk<TodolistType[], void>(
  'todolist/getTodoLists',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiInstance.get<TodolistRequest[]>('/todolist')
      return converter(res.data)
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
