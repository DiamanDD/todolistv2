import { createSlice } from '@reduxjs/toolkit'
import { TodolistType } from '@/types'
import { getTodoLists } from '../api'

interface InitialStateType {
  isLoading: boolean
  todoLists: TodolistType[]
}

const initialState: InitialStateType = {
  isLoading: false,
  todoLists: [],
}
export const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoLists.fulfilled, (state, action) => {
      state.todoLists = action.payload
    })
  },
})
