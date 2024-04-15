import React from 'react'
import Login from '../Elements/Authentication/Login'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import { Section } from './Section'
import Hero from './Hero'
// Your Home component code here

function Home() {
    return (
        <div className='md:p-5 md:mt-20'style={{backgroundImage:"linear-gradient(#b3f2ff,#ffff)"}} >
             
            <Section/>
             <Carousel/>
             <Hero/>
      
           
          
            
        </div>
    )
}

export default Home



