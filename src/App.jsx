import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './assets/layouts/Mainlayout'
import NewsFeedPage from './assets/pages/NewsFeedPage'
import { Registerlayout } from './assets/components/Registerlayout'
import RegisterPage from './assets/pages/RegisterPage'
import LoginPage from './assets/pages/LoginPage'
import PotectedRoute from './assets/layouts/ProtectedRoute'
import ProfilePage from './assets/pages/ProfilePage'
import AuthPotectedRoute from './assets/layouts/AuthProtectedRoute'



function App() {
  const routes = createBrowserRouter([
    {
      path: '', element: <Mainlayout />, children: [
        { index: true, element: <PotectedRoute><NewsFeedPage /></PotectedRoute> },
        {
          path: 'profile', element: <PotectedRoute>
            <ProfilePage></ProfilePage>
          </PotectedRoute>
        }
      ]
    },
    {
      path: '', element: <Registerlayout />, children: [
        { path: 'register', element: <AuthPotectedRoute><RegisterPage /> </AuthPotectedRoute> },
        { path: 'login', element: <AuthPotectedRoute><LoginPage /></AuthPotectedRoute> }
      ]
    }
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
