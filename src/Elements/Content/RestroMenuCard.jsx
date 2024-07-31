import { useState } from "react";



function RestroMenuCard({ name, price, url, id, restroId }) {
    const [item, setItem] = useState(0)
    const increment = () => {
        setItem(item + 1)
    }
    const decrement = () => {
        if (item > 0) {
            setItem(item - 1)
        }

    }
    const AddToCart = () => {
        console.log(id);
        console.log(restroId);
    }
    return (
        <div className="p-10">
            <div className="card w-96 bg-white-100 shadow-xl glass">
                <figure><img src={url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => { AddToCart(); increment(); }} className="btn btn-primary">ADD+</button>
                    </div>
                </div>
            </div>
           <AddToCart/>

        </div>
    )
}

export default RestroMenuCard
