import React from 'react';
import { Link } from 'react-router-dom';

// {
//   "hasError": false,
//   "title": "Restaurants List",
//   "data": {
//     "remainingCount": 99,
//     "dataList": [
//       {
//         "name": "Guendolen Benallack",
//         "cusine": "Vietnamese",
//         "price": 433.53,
//         "rating": 3.2,
//         "bannerURL": "https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg"
//       }
//     ]
//   },
//   "message": "Restaurants listed successfully"
// }
const ProductCard = ({ name, cusine, price, rating, image }) => {
  return (
    <div className='mb-5 py-1 px-5'>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-100 transform hover:scale-105">
        <img className="h-56 w-full object-cover" src={image} alt="img" />
        <div className="p-3">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-500 mb-4">{cusine}</p>
          <div className="flex items-center">
            <span className="text-gray-600 flex flex-row">
              <span> {rating}</span>
              
              <span><img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="img" /></span>
              
            </span>
          </div>
          <div className="flex items-center">
            <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/9375/9375840.png" alt="" />
            <span className="text-black font-bold text-xl">{price}</span>
            <span><button className='btn w-36 btn-primary ml-24'>Explore</button></span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
