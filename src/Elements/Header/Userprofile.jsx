import React from 'react'


import { useNavigate } from 'react-router-dom';

function Userprofile() {

    const navigate=useNavigate()

    const userprofile=async()=>{
        try {
            const response = await fetch('http://localhost:8000/user/profile', {
                method: 'GET',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                 
                },
            });
            response.json().then((res)=>{
    
                if (res.hasError) {
                    console.log(res.message );
                }else{
                    navigate("/user/profile")
                }
               
            }).catch((err)=>{
                console.log(err);
            })
        } catch (error) {
           console.log(error); 
        }
    }
  return (
    <div className='flex justify-center items-center h-screen w-full bg-white'>
      <div>
         <h1>profile</h1>
      </div>
    </div>
  )
}

export default Userprofile
