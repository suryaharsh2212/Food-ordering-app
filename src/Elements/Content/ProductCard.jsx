import React, { useState } from 'react';
import { Link } from 'react-router-dom' ;
import { useNavigate } from 'react-router-dom'




const ProductCard = ({ uid, name, cusine, price, rating, image,restaurantId }) => {
  const navigate= useNavigate()
  const restaurantTagLinesArray = [
    "Experience the perfect fusion of flavor and ambiance, where every dish tells a story of culinary excellence.",
    "We're dedicated to crafting unforgettable dining moments with expertly prepared dishes and warm hospitality.",
    "Savor the taste of perfection, where each bite is a celebration of culinary creativity and passion.",
    "Embark on a culinary adventure that tantalizes your taste buds and delights your senses.",
    "Discover a world of culinary delights, where every dish is a masterpiece waiting to be savored.",
    "Indulge in the art of fine dining, where quality ingredients and impeccable service come together in harmony.",
    "Great food is the heart of any gathering, and we're here to make your dining experience truly exceptional.",
    "From our kitchen to your table, experience the essence of culinary excellence in every bite.",
    "Escape the ordinary and elevate your dining experience, where each dish is crafted with precision and passion.",
    "We're committed to creating memorable dining experiences that leave a lasting impression on your palate.",
    "Indulge in a symphony of flavors that dance across your taste buds with every bite.",
    "Immerse yourself in a world of culinary delights, where each dish is a testament to our commitment to excellence.",
    "Experience the magic, where every meal is an opportunity to savor the finest ingredients and exquisite flavors.",
    "Dining should be an experience to remember, and we're here to exceed your expectations.",
    "Elevate your dining experience to new heights, where innovation and tradition come together to create culinary perfection.",
    "Let our passion for food and hospitality transport you to a world of culinary bliss.",
    "Discover the true meaning of culinary excellence, where every dish is a work of art crafted with care and precision.",
    "We're more than just a restaurant; we're a destination for food lovers seeking an unforgettable dining experience.",
    "Indulge in the extraordinary, where every meal is a journey of discovery and delight.",
    "Experience the epitome of fine dining, where every detail is carefully curated to delight your senses."];
    const GetRandom=()=>{
      return restaurantTagLinesArray[ Math.floor(Math.random()*restaurantTagLinesArray.length)]
    }
   function showMenu(restroID)
   {
    console.log(restroID);
    navigate(`/restaurant-menu/${restroID}`)

   }
  
 
  return (

    <div className='relative top-24 md:top-36'>

        <div className=' h-fit w-full p-2' >
        <div className="card card-compact w-full  bg-aliceblue shadow-xl transition rounded-lg duration-200 transform hover:bg-white hover:scale-95 hover:rounded-2xl">
          <figure className=" h-52 overflow-hidden">
            <img className=" w-full h-full" src={image} alt="restro" />
          </figure>
          <div className="card-body h-1/2">
            <h2 className="card-title text-base">{name} <span className='ml-10'><img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png" alt="" /></span>< span className='text-sm '>{rating}</span> </h2>
            <h2>{cusine}</h2>
            <p className=' scale-95'>{GetRandom()}</p>   

           

            <h2 className=' font-medium text-xl flex'><span><img className='h-4 w-4' src="https://cdn-icons-png.flaticon.com/128/9375/9375840.png" alt="" /></span><span>{price}</span></h2>

             
             <div className="card-actions justify-end">
              <button className="btn bg-red-600 text-white w-full hover:bg-red-700" onClick={() => {showMenu(restaurantId)}}>Explore Menu</button>
            </div>
          </div>
        </div> 

       </div> 
      
 
 





      <div className=''>
     
      </div>


    </div>
  );
};


export default ProductCard;
