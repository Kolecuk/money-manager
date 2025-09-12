import { Outlet } from 'react-router'
import { Main } from './Main'
import { Header } from './Header'
import { Wrapper } from './Wrapper'

export function UserContainer() {
  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Main>
    </>
  )
}