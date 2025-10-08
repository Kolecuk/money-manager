import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { AuthContainer } from './components/AuthContainer'
import { UserContainer } from './components/UserContainer'
import { Greeting } from './pages/Greeting'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { PasswordRecovery } from './pages/PasswordRecovery'
import { ResetPassword } from './pages/ResetPassword'
import { Home } from './pages/Home'
import { Operations } from './pages/Operations'
import { Stats } from './pages/Stats'
import { Settings } from './pages/Settings'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <AuthContainer />,
        children: [
          {
            path: '/',
            element: <Greeting />
          },
          {
            path: '/signin',
            element: <SignIn />
          },
          {
            path: '/signup',
            element: <SignUp />
          },
          {
            path: '/passwordrecovery',
            element: <PasswordRecovery />
          },
          {
            path: '/resetpassword',
            element: <ResetPassword />
          },
        ]
      },
      {
        element: <UserContainer />,
        children: [
          {
            path: '/home',
            element: <Home />
          },
          {
            path: '/operations',
            element: <Operations />
          },
          {
            path: '/stats',
            element: <Stats />
          },
          {
            path: '/settings',
            element: <Settings />
          },
        ]
      },
    ]
  }
])