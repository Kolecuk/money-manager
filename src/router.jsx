import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
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
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
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
  }
])