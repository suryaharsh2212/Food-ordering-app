import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";


const ProductCard = ({ name, cusine, price, rating, image }) => {
  return (

    <div className='relative top-24 md:top-36'>

      <div className=' h-fit w-full p-2' >
        <div className="card card-compact w-full h-96 bg-aliceblue shadow-xl transition rounded-lg duration-200 transform hover:bg-white hover:scale-95 hover:rounded-2xl">
          <figure className="h-1/2 overflow-hidden">
            <img className="h-full w-full" src={image} alt="Shoes" />
          </figure>
          <div className="card-body h-1/2">
          <h2 className="card-title text-base">{name} <span className='ml-10'><img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/128/1040/1040230.png" alt="" /></span>< span className='text-sm '>{rating}</span> </h2>
            
            <h2>{cusine}  </h2>
          
            <h2 className=' font-medium text-xl flex'><span><img className='h-4 w-4' src="https://cdn-icons-png.flaticon.com/128/9375/9375840.png" alt="" /></span><span>{price}</span></h2>
           
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            <div className="card-actions justify-end">
              <button className="btn bg-red-600 text-white w-full hover:bg-red-700" onClick={() => document.getElementById('my_modal_3').showModal()}>Explore Menu</button>
            </div>
          </div>
        </div>

      </div>




      <dialog id="my_modal_3" className="modal w-screen ">
        <div className="modal-box h-screen w-screen">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="w-full overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Add item</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <th>1</th>
                  <td>chicken butter</td>
                  <td>250.0</td>
                  <td><button className='btn btn-info w-full'>Add+</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </dialog>


    </div>
  );
};


export default ProductCard;
