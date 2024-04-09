import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"
import { useEffect, useState } from "react"
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

function Content() {
  const [restro, setRestro] = useState([])
  const [pageNo, setpageNo] = useState(1)
  const [pageSize, setPagesize] = useState(10)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/restaurants/list', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pageNo, pageSize }),
        });
        const data = await response.json();

        setRestro(data.data.dataList);
        console.log(data.data.dataList); // Make sure to use data from the response, not state
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [pageNo, pageSize]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:mt-32" >

      <div className="grid grid-rows-10 h-full md:col-span-5 px-20">
        <div className="w-full  row-span-1 flex  ">
          <div className="flex w-full justify-center items-center p-5">
            <SearchBar />
          </div>
        </div>
        <div className="container mx-auto -mt-44 md:-mt-14  grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-3 row-span-9">
          {restro.map((item) => (
            <ProductCard
              key={item.name} // Don't forget to add a unique key
              name={item.name}
              cusine={item.cusine}
              price={item.price}
              rating={item.rating}
              image={item.bannerURL}
            />
          ))}

        </div>
      </div >
      <div className="flex justify-center items-center h-full w-screen">
        <div className="">
          <div className="join grid grid-cols-2">
            <button className="join-item btn btn-outline">Previous page</button>
            <button className="join-item btn btn-outline">Next</button>
          </div>
        </div>
      </div>



    </div >
  )
}

export default Content
