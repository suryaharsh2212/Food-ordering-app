import React from 'react'
import Login from '../Elements/Authentication/Login'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className=' md:mt-20'>
            <div className='w-full h-screen  grid grid-cols-1 sm:grid-cols-2 '>
                <div className='flex justify-center flex-col items-center'  >

                    <div className="hero min-h-screen bg-white">
                        <div className="hero-content text-center">
                            <div className="max-w-md flex justify-center items-center flex-col">
                                {/* <img className=' h-44 w-44 mb-10' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-eating-illustration_23-2149194115.jpg?t=st=1711772374~exp=1711775974~hmac=14c7cd1ee705eb595bdf774eb7f197a99cab0c648fcf1e2646c40342e8774041&w=740" alt="" />  */}
                                <h1 className="text-5xl font-bold">Satisfy Your Cravings, Delivered Fast!</h1>
                                <p className="py-6">Experience culinary sophistication with convenience. Place your order today and savor the flavors of excellence delivered to your doorstep.</p>  
                                <button className='btn w-44 bg-blue-600 text-white '><Link to="/user/register">Get Started</Link></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='-mt-44 mb-10 md:mt-10'>
                    <img src="https://cdn.discordapp.com/attachments/792757818217988157/1222952419969990696/high-res.png?ex=66181632&is=6605a132&hm=a319112700734b1433ace274b11781f3f82854d35344a69e0c009e5eb5422c0c&" alt="hhytefy" />
                </div>
            </div>
            <div>
                <div className="hero min-h-screen bg-white mt-32 md:-mt-20">
                    <div className="hero-content flex-col lg:flex-row-reverse ">

                        <div>
                            <h1 className="text-5xl py-5 font-bold md:ml-10">A Symphony of Flavors!</h1>
                            <p className="py-5 md:p-10">Welcome to <span className=' font-semibold text-blue-600'> JUSTEAT</span>, a pioneering food delivery app, has revolutionized the way we experience dining. With a vast network of partner restaurants offering a diverse array of cuisines, JustEat brings the world's flavors to your doorstep with just a few taps on your smartphone. Whether craving a hearty Italian pasta, a spicy Indian curry, or a comforting bowl of ramen, JustEat seamlessly connects hungry patrons with their favorite local eateries. With user-friendly interfaces, real-time tracking, and secure payment options, JustEat ensures a hassle-free and delightful dining experience for food lovers everywhere. Whether enjoying a cozy night in or hosting a gathering with friends, JustEat promises convenience, quality, and satisfaction with every order delivered straight to your door.</p>
                            <button className="btn md:ml-32 md:-mt-10 btn-primary">Explore Menu</button>
                        </div>
                        <img src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg" className="md:h-1/2 md:w-1/2 rounded-lg shadow-2xl hover:transition-transform scale-100" />
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-sm md:h-full w-full md:w-screen rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Get Delivered from you Favourite spot!</h1>
                        <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home