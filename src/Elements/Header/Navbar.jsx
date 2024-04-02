import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate=useNavigate()
  const logout=async()=>{
    try {
        const response = await fetch('http://localhost:8000/user/logout', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
             
            },
        });
        response.json().then((res)=>{

            if (res.hasError) {
                console.log(res.message );
            }else{
                navigate("/")
            }
           
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
       console.log(error); 
    }
}


  return (
    <nav>
      <div className="navbar bg-base-100 fixed top-0 z-50" style={{ background: "whitesmoke" }} >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 h-56 shadow bg-base-100 rounded-box w-52">
              <li className='p-2'><Link className=' text-xs font-extrabold' to="/">Home</Link></li>
              <li className='p-2'><Link className=' text-xs font-extrabold' to="/user/register">Signup</Link></li>
              <li className='p-2'><Link className=' text-xs font-extrabold' to="/user/login">Login</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl"><span className=' font-extrabold text-blue-700' >JUST</span><span className=' font-extrabold' >EAT</span></a>
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
            <details className="dropdown">
              <summary className="m-1 btn"><img className='h-10 w-10 mr-3 dropdown' src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="" /></summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-44">
                <li><button>Profile</button></li>
                <li><button onClick={logout}>Logout</button></li>
              </ul>
            </details>

          </div>
          <Link to="/user/cart"> <img className='h-10 w-10 mr-3' src="https://cdn-icons-png.flaticon.com/128/1063/1063076.png" alt="" /></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar