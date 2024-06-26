
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

 function Userforgotpassword() {
  const navigate=useNavigate()
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const userId = searchParams.get('id');
  const [password,setPassword]=useState('')
  const [confirmPassword,setconfirmPassword]=useState('')
  const [alert ,setAlert]=useState(false)
  const changePassword = async () => {
    if (password === confirmPassword) {
      try {
        const response = await fetch('http://localhost:8000/password/reset', {
          method: 'POST',
          credentials: 'include',

          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token, userId, password ,confirmPassword}),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        if (data.hasError) {
          console.log(data.message);
        } else {
          navigate("/user/login");
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    } else {
      setAlert(true);
    }
  };
  
  
  return (
    <div>
      {alert ?
                <div role="alert" className="alert alert-error absolute top-24 left-1/2 transform -translate-x-1/2 ">

                    <span>Passoword and confirmPassword password are not same.!!!</span>
                    <button onClick={()=>{setAlert(false)}} className='flex justify-end'>
                        <img className='h-10 w-10 animate-pulse' src="https://cdn-icons-png.flaticon.com/128/2734/2734822.png" alt="" />
                    </button>
                </div>
                :
                <></>
            }
            {
      // <div className='flex flex-col justify-center items-center h-screen w-full'>
      //   <div className='flex flex-col p-20 border-solid border-black shadow-2xl'>
      //     <h1 className='mb-7 font-roboto font-bold -mt-10'>Provide a new Password</h1>
      // <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" className="mb-7 input input-bordered input-accent w-full max-w-xs" />
      // <input type='password' value={confirmPassword} onChange={(e)=>{setconfirmpassword(e.target.value)}} placeholder="confirmPassword password" className="input input-bordered input-accent w-full max-w-xs" />
      // <button onClick={changePassword} className='block mt-10 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Change Password</button>
      // </div></div>
      <div className="flex justify-center items-center h-screen bg-slate-50">
      <div className="bg-white dark:bg-slate-100 shadow-lg rounded-lg overflow-hidden p-10">
        <h1 className="text-2xl font-bold mb-7">Provide a new Password</h1>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          className="mb-4 input input-bordered input-accent w-full max-w-xs" 
        />
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setconfirmPassword(e.target.value)} 
          placeholder="Confirm Password" 
          className="mb-4 input input-bordered input-accent w-full max-w-xs" 
        />
        <button 
          onClick={changePassword} 
          className="block  rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Change Password
        </button>
      </div>
    </div>
    
    }
  

    </div>
  )
}

export default Userforgotpassword;

