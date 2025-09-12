import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { AuthContainer } from './components/AuthContainer'
import { UserContainer } from './components/UserContainer'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { ForgotPassword } from './pages/ForgotPassword'
import { ResetPassword } from './pages/ResetPassword'
import { Dashboard } from './pages/Dashboard'
import { Add } from './pages/Add'
import { List } from './pages/List'
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
            element: <Home />
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
            path: '/forgotpassword',
            element: <ForgotPassword />
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
            path: '/dashboard',
            element: <Dashboard />
          },
          {
            path: '/add',
            element: <Add />
          },
          {
            path: '/list',
            element: <List />
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