import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './Components/AddCoffee.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    loader: () => fetch('http://localhost:3000/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
