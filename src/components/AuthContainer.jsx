import { Outlet } from 'react-router'
import { Main } from './Main'
import { Wrapper } from './Wrapper'

export function AuthContainer() {
  return (
    <Main>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Main>
  )
}