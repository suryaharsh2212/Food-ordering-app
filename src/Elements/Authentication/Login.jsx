import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState('')
    const [message,setmessage]=useState('')
    const [alert,setAlert]=useState(false)
  
  
        const LoginRequest=async()=>{
            try {
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
                        console.log(res.message );
                        setmessage(res.message)

                        setAlert(true)
                    }else{
                        navigate("/user/content")
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
            <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 '>

                <div className=' border-red-950  md:mt-32'>
                    <img className='' src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" />
                </div>

                <div className=' flex justify-center items-center flex-col gap-5 shadow-xl  rounded mb-10 md:mt-28' >
                    <img className='' src="https://cdn-icons-png.flaticon.com/128/3293/3293466.png" alt="" /> 
                    <h1 className=' font-bold'>Login to your Account</h1>
                    
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input  type="text" className="grow w-72" placeholder="Email/PhoneNo" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input  type="password" className="grow w-72"  placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </label>
                    <div>
                        <span><Link className=' text-blue-600 mr-5 text-xs' to="/user/register">Signup with us !</Link></span>
                        <span><Link className='text-blue-600   text-xs' to="/request/forgot-password">Forgot Your Password?</Link></span>
                    </div>
                    <div className='w-1/2 flex justify-center' >
                        <button type='submit'onClick={LoginRequest} className='btn bg-sky-400 w-full md:w-5/6'>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
