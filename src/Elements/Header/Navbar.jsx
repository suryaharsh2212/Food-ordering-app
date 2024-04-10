import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Account from './Account'
import { Button } from '@material-tailwind/react'
import Cart from '../Cart/Cart'
function Navbar() {
  const navigate=useNavigate()
  const [alert,setAlert]=useState(false)
  




  return (
    <nav>
      {alert?
             <div role="alert" className="alert alert-error flex flex-row w-screen absolute top-14 md:top-28 left-1/2 transform -translate-x-1/2 z-50">
            
             <span>Login first</span>
            <button onClick={()=>{setAlert(false)}} className='flex justify-end'>
             <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/128/2734/2734822.png" alt="" />
             </button> 
           </div>
            :
            <></>
            }
      <div className="navbar  fixed top-0 z-50 bg-slate-100 border-b-2" style={{ background:"" }} >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 h- shadow bg-base-100 rounded-box w-52">
              <li className='p-1 '><Link className=' text-lg font-medium hover:bg-slate-200' to="/">Home</Link></li>
              <li className='p-1 '><Link className=' text-lg font-medium hover:bg-slate-200' to="/user/register">Signup</Link></li>
              <li className='p-1 '><Link className=' text-lg font-medium hover:bg-slate-200' to="/user/login">Login</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl"><span className=' font-extrabold text-orange-700' >JUST</span><span className=' font-extrabold' >EAT</span></a>
        </div>
        <div className="navbar-end p-3 mr-3 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link className=' text-xl font-medium text-black' to="/">Home</Link></li>
            <li><Link className=' text-xl font-medium text-black' to="/user/register">Signup</Link></li>
            <li><Link className=' text-xl font-medium text-black' to="/user/login">Login</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <Account/>
            

          </div>
          <Link to="/user/cart"><img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="" /> </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
