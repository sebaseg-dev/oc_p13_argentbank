import { createBrowserRouter } from 'react-router'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'
import Profile from './pages/Profile.jsx'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/*',
      element: <NotFound />,
    }
  ]
)