import { LoginPage } from '@/page'
import { Provider } from 'react-redux'
import { store, useAppSelector } from '@/app/store'

export const App = () => {
  const { isAuthorize } = useAppSelector((state) => state.userReducer)
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
