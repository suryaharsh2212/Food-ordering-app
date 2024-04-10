import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { parsePhoneNumberFromString } from "libphonenumber-js"

import { Switch } from '@headlessui/react'



const Register = () => {
    const [message, setmessage] = useState("");
    const [otp, setOTP] = useState();
    const [alert, setAlert] = useState(false);
    const [check, setcheck] = useState(false);
    const [spin, setspin] = useState(false);
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }


    const [user, setUser] = useState({
        email: "",
        phoneNo: "",
        firstName: "",
        middleName: "qwert",
        lastName: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };



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

    const genotp = async () => {


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
            const email = user.email
            try {
                const otpres = await fetch('http://localhost:8000/otp/send', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
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
        <div className=' px-5 h-screen md:mt-32 border-slate-100 '>
            {alert ?
                <div role="alert" className="alert alert-error absolute top-24 left-1/2 transform -translate-x-1/2 z-50 ">

                    <span>{message}</span>
                    <button onClick={() => { setAlert(false) }} className='flex justify-end'>
                        <img className='h-10 w-10 animate-pulse' src="https://cdn-icons-png.flaticon.com/128/2734/2734822.png" alt="" />
                    </button>
                </div>
                :
                <></>
            }

            {check ?
                <div className='w-full h-screen flex justify-center items-center -mt-20  shadow-xl'>
                    <h1 className=' text-center'></h1>

                    <div className="relative flex min-h-screen flex-col justify-center w-screen bg-gray-50">
                        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg border-black rounded">
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
                <div className="mx-auto max-w-xl sm:mt-20 shadow-lg md:px-20 md:py-5  bg-white rounded border-black ">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-20 h-full p-10 md:p-0">
                        <div className=''>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={user.firstName}
                                    name="firstName" // Corrected the name attribute to match the key in your state object
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name="lastName" // Corrected the name attribute to match the key in your state object
                                    id="last-name"
                                    autoComplete="family-name"
                                    value={user.lastName}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={user.email}
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone number
                            </label>
                            <div className="relative mt-2.5">
                                <input
                                    type="number"
                                    name="phoneNo" // Corrected the name attribute to match the key in your state object
                                    onChange={handleChange}
                                    // id="phone-number" 
                                    value={user.phoneNo}

                                    className="block w-full rounded-md border-0  py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                Create your Password
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="password"
                                    onChange={handleChange}
                                    value={user.password}
                                    name="password" // Corrected the name attribute to match the key in your state object
                                    id="company"
                                    autoComplete="organization"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className='h-2'> <h1>Already a user ? <Link className='text-bold text-blue-600' to="/user/login">Login</Link></h1></div>

                        
                    </div>
                    <div className="mt-2 p-10">
                            
                            <button
                                onClick={genotp}
                                className="block w-full flex-grow rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {spin ? (
                                    <div className="loading loading-dots loading-md"></div>
                                ) : (
                                    <div className=" ">SignUp</div>
                                )}
                            </button>
                        </div>


                </div>


            }
        </div>
    );
};

export default Register;
