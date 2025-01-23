import { useAppDispatch, useAppSelector } from '@/app'
import { useEffect } from 'react'
import { getTodoLists } from '@/entity'

export const TodoLists = () => {
  const { todoLists } = useAppSelector((state) => state.todolistReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTodoLists())
  }, [])

  return (
    <ul>
      {todoLists.map((todolist) => (
        <li>{todolist.title}</li>
      ))}
    </ul>
  )
}
