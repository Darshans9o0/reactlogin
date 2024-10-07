import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element  :<Layout/>,
    children : [
      {
        path : "",
        element : <Home/>,
      } ,
      {
        path : "about",
        element : <about/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
