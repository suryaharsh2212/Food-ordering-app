import React, { useState } from 'react'

function ForgotPassword() {
 const[alert,setAlert]=useState(false)
 const [email,setEmail]=useState('');

const forgot=async()=>{
    try {
        const response = await fetch('http://localhost:8000/password/request-reset', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify({email}),
        });
        response.json().then((res)=>{
            console.log(res);
            if(res.hasError)
            {
              setAlert(true)
            }
             
           
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
       console.log(error); 
    }
}



 


  return (
    <div>
       {alert?
             <div role="alert" className="alert alert-error flex flex-row w-screen absolute top-14 md:top-28 left-1/2 transform -translate-x-1/2 z-50">
            
             <span>We have sent you a link in your email-({email}) to change your password.</span>
            <button onClick={()=>{setAlert(false)}} className='flex justify-end'>
             <img className='h-10 w-10' src="https://cdn-icons-png.flaticon.com/128/2734/2734822.png" alt="" />
             </button> 
           </div>
            :
            <></>
            }
      <div className='h-screen w-full bg-white flex justify-center items-center p-5'>
       
        <div className='flex flex-col md:w-1/3 w-full shadow-2xl p-5 md:p-20'>
        <h1 className=' font-roboto font-bold mb-5 -mt-10'>Provide your Registered Email</h1>
        <input type="email" placeholder='Your email' className='px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500' value={email} onChange={(e)=>{setEmail(e.target.value)}} name="" id="" />
         <button onClick={()=>forgot()} className='btn btn-primary mt-10'>Request</button>
      </div>
      </div>
    </div>
  )
}

export default ForgotPassword
