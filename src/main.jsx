import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import router from './routes/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'




const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <Home></Home>
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
