import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

const ProductTile = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemove() {
    console.log("has been removed");
    dispatch(removeFromCart(product.id))
  }

  return (
    <>
      <div>
        <div
          className="group flex flex-col items-center
             border-2 border-red-900 gap-3 
             p-4 h-[360px] mt-10 ml-5 rounded-xl"
        >
          <div className="h-[180px]">
            <img
              src={product?.image}
              alt={product?.title}
              className="object-cover h-full w-full"
            />
          </div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
          <div className="flex justify-center  w-full mt-5">
            <button
              onClick={
                cart.some((item) => item.id === product.id)
                  ? handleRemove
                  : handleAddToCart
              }
              className="bg-red-900 text-white border-2 
          rounded-lg font-bold p-4"
            >
              {cart.some((item) => item.id === product.id)
                ? "Remove from cart"
                : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTile;
