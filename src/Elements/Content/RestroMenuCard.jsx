


function RestroMenuCard({ name, price, url, id }) {
    return (
        <div className="p-20">
            {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-fit h-fit" src={url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn  bg-red-500 hover:bg-red-600 text-white">Add to Cart</button>
                    </div>
                </div>
            </div> */}
            <div className="card w-96 bg-white-100 shadow-xl glass">
                <figure><img src={url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">ADD+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestroMenuCard
