import React from "react";
import { useDispatch } from "react-redux";
import {  removeFromCart } from "../../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
   const dispatch =  useDispatch()
  function handleRemoveFromCart() {
    dispatch (removeFromCart(cartItem.id))
  }
  return (
    <>
      <div className="flex justify-between items-center p-5 bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-27 rounded-lg "
          />
        <div className="ml-10 self-start space-y-5">
          <h1 className="text-white font-bold text-xl">{cartItem.title}</h1>
          <p className="font-etrabold text-white">{cartItem?.price}</p>
        </div>
        </div>

        <div>
          <button
           
            onClick={handleRemoveFromCart}
            className="bg-red-900 text-white border-2 
          rounded-lg font-bold p-4"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
