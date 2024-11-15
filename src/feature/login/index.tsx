import { Button, Flex, Input } from '@/shared'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app'
import { signIn, authMe } from '@/entity'
import { Navigate } from 'react-router-dom'

export const Login = () => {
  const dispatch = useAppDispatch()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const { isLoading, isAuthorize, isInitialized } = useAppSelector((state) => state.userReducer)

  useEffect(() => {
    if (!isAuthorize) {
      dispatch(authMe())
    }
  }, [])
  if (!isInitialized) {
    return <>...Loading</>
  }
  if (isAuthorize) {
    return <Navigate to={'/todolist'} />
  }
  const onClick = () => {
    if (login && password) {
      dispatch(signIn({ password, username: login }))
    } else {
      setError(true)
    }
  }
  const clearError = () => {
    if (error) {
      setError(false)
    }
  }
  return (
    <Flex justify={'center'} align={'center'} style={{ background: 'gray', height: '100vh' }}>
      <Flex
        vertical
        gap={24}
        style={{ background: 'white', padding: '24px', borderRadius: '8px', width: '300px' }}
      >
        <Input
          value={login}
          placeholder={'Логин'}
          onChange={(event) => {
            clearError()
            setLogin(event.currentTarget.value)
          }}
          status={error && !login ? 'error' : ''}
        />
        <Input.Password
          value={password}
          placeholder={'Пароль'}
          onChange={(event) => {
            clearError()
            setPassword(event.currentTarget.value)
          }}
          status={error && !password ? 'error' : ''}
        />
        <Button type={'primary'} onClick={onClick} loading={isLoading}>
          Вход
        </Button>
      </Flex>
    </Flex>
  )
}
