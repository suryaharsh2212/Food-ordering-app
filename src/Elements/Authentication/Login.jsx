import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState('')
    const [message,setmessage]=useState('')
    const [alert,setAlert]=useState(false)
    const [spin,setSpin]=useState(true)
  
        const LoginRequest=async()=>{
            try {
                setSpin(false)
                const response = await fetch('http://localhost:8000/user/login', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                      'Content-Type': 'application/json',
                     
                    },
                    body: JSON.stringify({email,password}),
                });
                response.json().then((res)=>{
                    console.log(res);
                
                    console.log(document.cookie);
                    if (res.hasError) {
                        setSpin(true)
                        console.log(res.message );
                        setmessage(res.message)

                        setAlert(true)
                    }else{
                        navigate("/user/content")
                        setSpin(false)
                    }
                   
                }).catch((err)=>{
                    console.log(err);
                })
            } catch (error) {
               console.log(error); 
            }
        }
        // https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1807.jpg?size=626&ext=jpg&ga=GA1.1.1500486508.1710956728&semt=ais 
    
    return (
        <div>
             {alert?
             <div role="alert" className="alert alert-error flex flex-row w-screen absolute top-14 md:top-28 left-1/2 transform -translate-x-1/2 z-50">
            
             <span>{message}</span>
            <button onClick={()=>{setAlert(false)}} className='flex justify-end'>
             <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/128/2734/2734822.png" alt="" />
             </button> 
           </div>
            :
            <></>
            }
             
          


      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm shadow-lg p-10 md:mt-20 border border-slate-100 border-solid rounded mt-20 md:p-20">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2 ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/request/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2 ">
                <input
                  id="password"
                  value={password}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={LoginRequest}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 btn btn-warning"
              >
                {spin? <div>Sign in</div> :<span className="loading loading-spinner loading-md"></span>}
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/user/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Signup with us
            </Link>
          </p>
        </div>
      </div>
  

        </div>
    )
}

export default Login
