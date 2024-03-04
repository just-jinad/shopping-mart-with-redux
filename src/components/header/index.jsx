import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto ">
          <Link to={"/"}>
            <div className="ml-5 ">
              <h1 className="text-red-900 font-bold 
             text-xl sm:text-2xl 
              md:text-3xl cursor-pointer tracking-wide">
                React redux shopping cart
              </h1>
            </div>
          </Link>
          <div className="flex list-none items-center space-x-6 text-gray-800 font-semi-bold">
            <Link to={'/'}>
            <li className="font-bold text-xl cursor-pointer">Home</li>
            </Link>

            <Link to={'/cart'}>
            <li className="font-bold text-xl cursor-pointer">Cart</li>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
