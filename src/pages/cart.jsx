import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";
const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);
  return (
    <>
      <div>
        {cart && cart.length ? (
          <div className="min-h-[80vh] grid md:grid-cols-2 mx-auto max-w-6xl ">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
            <div className="flex flex-col justify-center items-end mt-14 space-y-5 p-5">
              <h1 className="font-bold text-xl text-red-800">
                Your cart summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Item</span>
                <span>{cart.length}</span>
              </p>

              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span>{totalCart}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="min-h-[80vh] flex flex-col items-center justify-center ">
            <h1 className="text-gray-800 mb-2 font-bold text-xl ">
              Your shopping cart is empty
            </h1>
            <Link to="/">
              <button className="bg-red-900 text-black  rounded-lg font-bold p-4 border-2">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
