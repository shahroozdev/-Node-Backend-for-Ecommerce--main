import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import apiClient from "../../../lib/utils";


const CartItems = ({total, setTotal}) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [discount , setDiscount] =useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

    const handleFormSubmit = async(data) => {
      try {
          const res = await apiClient.post({
            url: "/coupan/apply",
            data: {...data, cartTotal:cartItems.reduce((a, b) => a + b.price * b.quantity, 0)},
            showToast:true
          });
          if (res.message.includes("successfully")) {
            setTotal(res.finalTotal)
            setDiscount(res.discount)
          }
          console.log(res)
      } catch (error) {
        console.error("Error submitting form:", error);
      }
  };
  return (
    <div className="p-5">
      <h2 className="text-xl uppercase">Order Summary</h2>
      <div className="mt-3 border-2 rounded border-black/10">
        {cartItems.map((item, idx) => (
          <div
            key={idx}
            className={`m-3 ${
              idx !== cartItems.length - 1 && "border-b-2 pb-3 border-black/10"
            }`}
          >
            <div className="grid grid-cols-[30%_auto] gap-3">
              <Link to={`/product-details/${item._id}`}>
                <img
                  src={
                    process.env.REACT_APP_BASE_URL.slice(0, -1) +
                    item?.images[0]
                  }
                  className="h-full aspect-square object-center object-cover rounded-lg"
                  alt={item.name}
                />
              </Link>
              <div className="flex flex-col gap-1">
                <p className="">{item.name}</p>
                <p className="text-sm font-light">
                  ₹{item.price} X {item.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between">
          <p className="">Subtotal</p>
          <p className="">
            ₹{cartItems.reduce((a, b) => a + b.price * b.quantity, 0)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="">Shipping</p>
          {/* <p className="">₹50</p> */}
          <p className="">---</p>
        </div>
        <div className="flex justify-between">
          <p className="">Dicsount</p>
          {/* <p className="">₹50</p> */}
          <p className="">{discount}</p>
        </div>
        <div className="flex text-xl justify-between border-t-2 border-black/10 pt-2">
          <p className="uppercase">Total</p>
          <p className="">
            ₹{total}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="p-2 w-full bg-gray-500 rounded-lg mt-5">
        <label className="text-[.95rem] text-white">Coupon Code</label>
        <div className="flex gap-2 w-full">
        <input
          type="text"
          className="p-2 rounded-md outline-none border-2 w-full"
          {...register("code", {
            required: "coupon code is required",
          })}
        />
          <button type="submit" className="bg-primary px-2 rounded-md text-white">Apply</button>
        </div>
        <small className="text-red-600">{errors.code?.message}</small>
      </form>
    </div>
  );
};

export default CartItems;
