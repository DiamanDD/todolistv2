import { Button, Flex, Input } from '@/shared'
import { useState } from 'react'

export const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const onClick = () => {
    if (login && password) {
      console.log(login, password)
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
        <Button type={'primary'} onClick={onClick}>
          Вход
        </Button>
      </Flex>
    </Flex>
  )
}
