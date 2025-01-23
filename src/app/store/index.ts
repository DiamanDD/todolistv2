import { configureStore } from '@reduxjs/toolkit'
import { userSlice, todolistSlice } from '@/entity'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    todolistReducer: todolistSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
