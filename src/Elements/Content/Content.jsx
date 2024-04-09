import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"
import { useEffect, useState } from "react"

function Content() {
  const [restro, setRestro] = useState([])
  const [pageNo, setpageNo] = useState(1)
  const [pageSize, setPagesize] = useState(12)
  const handleNextPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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
    <div className="grid grid-cols-1 md:grid-cols-5 gap-1 mt-1 h-full " >

      <div className="grid grid-rows-10 h-full md:col-span-5 md:px-20  bg-slate-400" style={{background:"aliceblue"}}>
        <div className="w-full h-5 row-span-1 flex  ">
          <div className="flex h-20 w-full justify-center mt-24 items-start p-5">
            <SearchBar />
          </div>
        </div>
        <div className="container mx-auto -mt-96 md:-mt-20 md:p-5  grid grid-cols-1 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 row-span-9">
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
        <div className="w-full h-20 p-20 flex justify-center items-center mt-24" style={{}}>
        <button className="join-item rounded-r btn btn-outline" onClick={()=>{setpageNo(pageNo-1),handleNextPage()}}>Previous page</button>
            <button className="join-item rounded-l btn btn-outline"onClick={()=>{setpageNo(pageNo+1),handleNextPage()}}>Next Page</button>

        </div>
      </div >

     



    </div >
  )
}

export default Content
