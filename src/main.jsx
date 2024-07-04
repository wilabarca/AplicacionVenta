import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import FormRegistro from './Pages/Form/FormRegistro.jsx'
import Blouse from './Pages/Coat.jsx'
import Adress from './Pages/Adress.jsx'
const router =  createBrowserRouter([
  {
    Path : '/',
    element : <App></App>
  },
  {
    path : '/',
    element : <Home></Home>

  },
  {
    path : '/Registro',
    element : <FormRegistro></FormRegistro>
  },
  {
    path: '/Blouse',
    element: <Blouse></Blouse>  
  },
  {
    path: '/Adress',
    element : <Adress></Adress>  
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
