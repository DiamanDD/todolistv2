import { Button } from '@/shared'
import { logOut } from '@/entity'
import { useAppDispatch, useAppSelector } from '@/app'
import { Flex } from 'antd'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { firstName, lastName } = useAppSelector((state) => state.userReducer)

  return (
    <Flex justify={'flex-end'}>
      <Flex align={'center'} gap={10}>
        <div>
          {firstName} {lastName}
        </div>
        <Button
          onClick={() => {
            dispatch(logOut())
          }}
        >
          LogOut
        </Button>
      </Flex>
    </Flex>
  )
}
