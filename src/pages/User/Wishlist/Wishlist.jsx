import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import apiClient from "../../../lib/utils";

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const setWishlist=async()=>{
    try {
      const res =await apiClient.get({url:`/wishlist`})
      console.log(res)
      setItems(res?.wishlist?.products)
    } catch (error) {
      console.log(error?.data?.message || 'error')
    }}
useEffect(()=>{
   setWishlist();
},[])
const removeFromWishList = async (productId) => {
  setItems(items.filter((i) => i._id !== productId))
  try {
    await apiClient.post({ url: `/wishlist`, data: { productId } });
  } catch (error) {
    console.log(error?.data?.message);
  }
}
  return (
    <div className="space-y-5">
      <p className="mb-3 text-xl">Wishlist</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {items?.length>0?items.map((item) => (
          <div key={item._id} className="flex flex-col gap-3 p-2 border rounded">
            <Link
              to={`/product-details/${item._id}`}
              className="overflow-hidden border border-primary rounded"
            >
              <img
                src={process.env.REACT_APP_BASE_URL.slice(0, -1) +
                  item?.images[0]}
                className="aspect-square object-cover"
                alt={item.title}
              />
            </Link>

            <div className="flex flex-col gap-2">
              <p className="">{item.name}</p>
              <p className="text-sm">₹{item.price}</p>
            </div>
            <div className="flex gap-5 justify-between">
              <button className="btn primary-btn w-full">Add to Cart</button>
              <button onClick={() => removeFromWishList(item?._id)} className="px-3 py-2 border rounded-full border-primary">
                <Trash2 />
              </button>
            </div>
          </div>
        )):<></>}
      </div>
    </div>
  );
};

export default Wishlist;
