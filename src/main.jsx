import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import router from './routes/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Home></Home>
    </RouterProvider>
  </React.StrictMode>,
)
