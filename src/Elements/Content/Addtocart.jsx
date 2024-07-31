import React from 'react'

const AddTOCart = () => {
  return (
    <div>
       <div className="border  fixed bottom-2  h-20 left-0 w-full bg-white p-4">
                 <div className="border solid h-10">
                 <div className="flex items-center justify-between border-b border-gray-300 py-2">
            <div>
                <h3 className="text-lg font-semibold">hiuyht</h3>
                <p className="text-gray-600">$89</p>
            </div>
            <div className="flex items-center">
                <button  className="px-2 py-1 bg-gray-200 text-gray-600 rounded-l">
                    -
                </button>
                <span className="px-4 py-1 bg-gray-100"></span>
                <button  className="px-2 py-1 bg-gray-200 text-gray-600 rounded-r">
                    +
                </button>
            </div>
        </div>

                 </div>
            </div>

    </div>
  )
}

export default AddTOCart
