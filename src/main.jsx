import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Customer from './Pages/Home/Customer.jsx'
import FormRegistro from './Pages/Form/FormRegistro.jsx'
import Blouse from './Pages/Coat.jsx'
import Adress from './Pages/Adress.jsx'
import UploadProduct from './Pages/Form/Uploadproduct.jsx'
import FormSesion from './Pages/Form/FormLogin.jsx'
import Home from './Pages/MainView/Home.jsx'
const router =  createBrowserRouter([
  {
    Path : '/',
    element : <App></App>
  },
  {
     path :'/',
     element : <Home></Home>
  },
  {
    path : '/Customer',
    element : <Customer></Customer>

  },
  {
    path : '/FormSesion',
    element : <FormSesion></FormSesion>
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
  },
  {
    path: '/uploadproduct',
    element: <UploadProduct></UploadProduct>

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
