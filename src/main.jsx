import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './components/Home.jsx'
import Time from './components/Time.jsx'

import './css/app.min.css'

const router = createBrowserRouter([
  {
    path: '/cartola-g12/',
    element: <App/>,
    
    children: [
      { path:'/cartola-g12/', element: <Home/> },
      { path:'/cartola-g12/time', element: <Time/> },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
