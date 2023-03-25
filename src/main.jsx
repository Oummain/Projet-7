import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import { DefaultLayout } from './layout/default'
import { HomePage, loader as homeLoader } from './pages/home'

import { LogementPage, loader as logementLoader } from './pages/logement'
import { NotFound } from './pages/notfound'
import { AboutPage,loader as aboutLoader } from './pages/about'

const router = createBrowserRouter([{
  path: '/',
  element: <DefaultLayout></DefaultLayout>,
  children: [
    {
      path: '',
      element: <HomePage></HomePage>,
      loader: homeLoader
    },
    {
      path:'logement/:id',
      element: <LogementPage></LogementPage>,
      loader: logementLoader
    },
    {
      path: 'about',
      element: <AboutPage></AboutPage>,
      loader: aboutLoader
    }
  ],
  errorElement: <NotFound></NotFound>

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
