import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout'
import {Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from "./Elements/Authentication/Login.jsx"
import Register from './Elements/Authentication/Register.jsx'
import Cart from './Elements/Cart/Cart.jsx'
import Home from './Layout/Home.jsx'
import Otpgenerate from './Elements/OTP/Otpgenerate.jsx'
import Content from './Elements/Content/Content.jsx'
import ForgotPassword from './Elements/Authentication/ForgotPassword.jsx'
import Userforgotpassword from './Elements/Authentication/Userforgotpassword.jsx'




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/user/login' element={<Login/>}/>
      <Route path='/user/register' element={<Register/>}/>
      <Route path='/user/cart' element={<Cart/>}/>
      <Route path='/otp/send' element={<Otpgenerate/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/content' element={<Content/>}/>
      <Route path='/request/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/user/forgot-password' element={<Userforgotpassword/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
