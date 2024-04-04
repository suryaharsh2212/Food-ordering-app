import React from 'react';
import { Link } from 'react-router-dom';


const ProductCard = () => {
  return (
      <div className='mb-5 py-10 px-5' >
          <div className="max-w-md mx-auto bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-100 transform hover:scale-105">
      <img className="h-56 w-full object-cover" src='https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600' alt="img" />
      <div className="p-6">
        <h2 className="text-xl font-semibold">SHALIMAR</h2>
        <p className="text-gray-500 mb-4">Indian</p>
        <div className="flex items-center mb-4">
          {/* <svg className="h-5 w-5 text-yellow-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg> */}
          <span className="text-gray-600 flex flex-row">
              <span><img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="img" /></span>
              <span><img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="img" /></span>
              <span><img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="img" /></span>
              <span><img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="img" /></span>
              <span><img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="img" /></span>
          </span>
        </div>
        <div className="flex items-center">
          {/* <svg className="h-5 w-5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg> */}
          {/* <h1 className=' font-extralight'>Price Range</h1> */}
          <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/9375/9375840.png" alt="" />
          <span className="text-black font-bold text-xl">100 </span>
          <span><button className='btn w-36 btn-primary ml-24'>Explore</button></span>
        </div>
      </div>
    </div>
    </div>




  );
};

export default ProductCard;
