import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './components/routes/routes.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}> 
  <StrictMode>
    {/* <App /> */}
  </StrictMode>,
  </RouterProvider>
)