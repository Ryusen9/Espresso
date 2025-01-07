import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    loader: () => fetch('http://localhost:3000/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee/>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee/>,
    loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
