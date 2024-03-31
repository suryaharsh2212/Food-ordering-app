import React from 'react'
async function Otpgenerate() {

  const response = await fetch('http://localhost:8000/otp/validate', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({email,}),
  });

  return (
    <div>
      <div className='h-96 w-full'>

      </div>
    </div>
  )
}

export default Otpgenerate
