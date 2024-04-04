import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { parsePhoneNumberFromString } from "libphonenumber-js"

const Register = () => {
    const [message, setmessage] = useState("")
    const [otp, setOTP] = useState()
    const [alert, setAlert] = useState(false)
    const [check, setcheck] = useState(false)
    const [spin,setspin]=useState(false)
    const navigate = useNavigate();


    const [user, setUser] = useState({
        email: "",
        phoneNo: "",
        firstName: "",
        middleName: "",
        lastName: "",
        password: "",
    });


    const handleSignup = async () => {
        try {
            console.log(user);
            const response = await fetch('http://localhost:8000/user/register', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data)


        } catch (error) {
            console.log(error);
        }
    };
    function validatePhoneno() {
        const phoneNumber = '91' + user.phoneNo;

        try {
            const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, 'IN');
            if (parsedPhoneNumber && parsedPhoneNumber.isValid()) {
                console.log('Valid Indian phone number');
                return true
            } else {
                console.log('Invalid Indian phone number');
                return false
            }
        } catch (error) {
            console.error('Error parsing phone number:', error);
        }
    }

    const genotp = async() => {
       

        if (user.firstName == "" || user.lastName == "") {
            setAlert(true)
            setmessage("Please enter your name and required fields")
        }
        else if (!validator.isEmail(user.email)) {
            setAlert(true)
            setmessage("Email provided is not valid")
        }
        else if (!validatePhoneno()) {
            setAlert(true)
            setmessage("Phone number is not valid")
        }
        else if (user.password.length < 8) {
            setAlert(true)
            setmessage("Password length must be altleast 8 characters")
        }
        else {
            setspin(true)
            const email=user.email
            try {
                const otpres = await fetch('http://localhost:8000/otp/send', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email}),
                });
                const otpData = await otpres.json();
                console.log(otpData);
                if (otpData.hasError) {
                    setAlert(true)
                    setspin(false)
                    setmessage(otpData.message)
                }
                else {
                    setspin(false)
                    setcheck(true)
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    const email = user.email
    const validateotp = async () => {
        try {
            const otpres = await fetch('http://localhost:8000/otp/validate', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),
            });
            const otpData = await otpres.json();
            console.log(otpData);
            if (otpData.hasError) {
                setAlert(true)
                setmessage(otpData.message)
            }
            else {
                await handleSignup()
                navigate("/user/content")
            }

        } catch (error) {
            console.log(error);
        }
    };





    return (
        <div>
            {alert ?
                <div role="alert" className="alert alert-error absolute top-24 left-1/2 transform -translate-x-1/2 ">

                    <span>{message}</span>
                    <button onClick={() => { setAlert(false) }} className='flex justify-end'>
                        <img className='h-10 w-10 animate-pulse' src="https://cdn-icons-png.flaticon.com/128/2734/2734822.png" alt="" />
                    </button>
                </div>
                :
                <></>
            }

            {check ?
                <div className='w-full h-screen flex justify-center items-center bg-white shadow-xl'>

                    <div className="relative flex min-h-screen flex-col justify-center w-screen bg-gray-50">
                        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                                <div className="flex flex-col items-center justify-center text-center space-y-2">
                                    <div className="font-semibold text-3xl">
                                        <p>Email Verification</p>
                                    </div>
                                    <div className="flex flex-row text-sm font-medium text-gray-400">
                                        <p>We have sent a code to your email to {user.email}</p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <div className="flex flex-col space-y-16 ">
                                            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                                <input type="text" value={otp} onChange={(e) => { setOTP(e.target.value) }} placeholder="Enter the OTP " className="input input-bordered input-accent w-full max-w-xs" />
                                            </div>

                                            <div className="flex flex-col space-y-5">
                                                <div className='flex justify-center items-center'>
                                                    <button onClick={validateotp} className="flex flex-row items-center justify-center text-center w-1/2 border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                                        Verify Account
                                                    </button>
                                                </div>

                                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                                    <p>Didn't receive code?</p>
                                                    {/* <button className="flex flex-row items-center text-blue-600" onClick={genotp(user.email)} rel="noopener noreferrer">Resend</button>  */}
                                                    <button className="flex flex-row items-center text-blue-600" onClick={() => genotp()} rel="noopener noreferrer">Resend</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
                    <div className=' md:mt-36'>
                        <img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1807.jpg?size=626&ext=jpg&ga=GA1.1.1500486508.1710956728&semt=ais " alt="" />
                    </div>
                    <div>
                        <div className='flex flex-col justify-start items-start gap-6 p-10  md:screen rounded-lg md:mt-36'>
                            <h1 className='  font-bold'>Please Register your Account !</h1>
                            <span className='flex w-4/5'>
                                <input
                                    type="text"
                                    required="true"
                                    placeholder="First Name"
                                    value={user.firstName}
                                    className="input input-bordered input-primary w-full max-w-xs"
                                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Middle Name"
                                    className="input input-bordered input-primary w-full max-w-xs ml-2"
                                    value={user.middleName}
                                    onChange={(e) => setUser({ ...user, middleName: e.target.value })}
                                />
                            </span>
                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                className="input input-bordered input-primary w-full max-w-xs"
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                            />
                            <input
                                required="true"
                                type="email"
                                placeholder='Enter your Email'
                                className='input input-bordered input-primary w-full max-w-xs'
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                            <input
                                required="true"
                                type='number'
                                placeholder='Enter your Phone No'
                                className='input input-bordered input-primary w-full max-w-xs'
                                value={user.phoneNo}
                                onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
                            />
                            <input
                                required
                                type="password"
                                placeholder='Create Your Password'
                                className='input input-bordered input-primary w-full max-w-xs'
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            <Link className=' font-light' to="/user/login">Already a User ? Login</Link>
                            <div className='flex justify-center md:justify-start w-full '>
                            <button className='btn w-1/3 ml-10 bg-blue-600 text-white' onClick={() => genotp()}>{spin?<><span className="loading loading-dots loading-md"></span></>:<>Signup</>}</button>
                        </div>
                        </div>
                      
                    </div>
                </div>}


        </div>
    );
};

export default Register;
