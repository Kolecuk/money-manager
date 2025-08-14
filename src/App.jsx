import { RouterProvider } from 'react-router'
import { router } from './router'

import './styles/app.scss'

export function App() {
  return (
    <RouterProvider router={router} />
  )
}