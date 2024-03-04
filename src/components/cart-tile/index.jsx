import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="flex border border-gray-200 rounded-lg p-4 mb-4">
      <img
        src={cartItem?.image}
        alt={cartItem?.title}
        className="h-32 w-32 object-cover rounded-md mr-4"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-semibold mb-1">{cartItem.title}</h1>
          <p className="text-gray-700 text-sm mb-2">{cartItem?.price}</p>
          <button
            onClick={handleRemoveFromCart}
            className="text-white bg-red-500 px-3 py-1 rounded-lg font-semibold"
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTile;
