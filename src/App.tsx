import { LoginPage } from '@/page'
import { Provider } from 'react-redux'
import { store, useAppDispatch, useAppSelector } from '@/app/store'
import { useEffect } from 'react'
import { authMe } from '@/entity/user/api/authMe.ts'

export const App = () => {
  const { isAuthorize, isInitialized } = useAppSelector((state) => state.userReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(authMe())
  }, [])

  if (!isInitialized) {
    return <>...Loading</>
  }
  if (!isAuthorize) {
    return <LoginPage />
  }
  return <>Наше приложение</>
}

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
