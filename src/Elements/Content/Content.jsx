import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"
import Table from "./Table"

function Content() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:mt-32" >
      <div className="md:col-span-1 w-full  ">
        <Table />
      </div>
      <div className="grid grid-rows-10 h-full md:col-span-4">
        <div className="w-full  row-span-1 flex  ">
          <div className="flex w-full justify-center items-center p-5">
            <SearchBar />
          </div>
        </div>
        <div className="container mx-auto -mt-44 md:-mt-14  grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-3 row-span-9">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />


          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
