import { useAppDispatch, useAppSelector } from '@/app'
import { useEffect } from 'react'
import { authMe } from '@/entity'
import { Navigate, Outlet } from 'react-router-dom'
import { BaseLayout, paths } from '@/shared'
import { Header } from '@/feature'

export const AuthRoute = () => {
  const { isAuthorize, isInitialized } = useAppSelector((state) => state.userReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    //TODO вынести в отдельный ХУК
    if (!isAuthorize) {
      dispatch(authMe())
    }
  }, [])

  if (!isInitialized) {
    return <>...Loading</>
  }
  if (!isAuthorize) {
    return <Navigate to={paths.login.route()} />
  }
  return <BaseLayout outlet={<Outlet />} header={<Header />} />
}
