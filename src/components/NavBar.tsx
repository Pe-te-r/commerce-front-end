import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/usAuth";

// Example cart icon - you can replace it with any icon of your choice
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  // const { isLoggedIn, toggleLogin } = useAuth();
  const { isLoggedIn } = useAuth();

  // Local state to manage cart items (you can later replace this with context)
  const [cartItems] = useState<number>(1);

  // Example of adding items to cart
  // const addToCart = () => {
  //   setCartItems(cartItems + 1); // For demonstration, adding 1 item at a time
  // };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-300"
        >
          Phantom Market
        </Link>
        {/* Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium text-lg transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/items"
            className="text-gray-700 hover:text-blue-600 font-medium text-lg transition duration-300"
          >
            Items
          </Link>
          <Link
            to={isLoggedIn ? "/account" : "/login"}
            className={`${
              isLoggedIn
                ? "text-green-600 hover:text-green-700"
                : "text-red-600 hover:text-red-700"
            } font-medium text-lg transition duration-300`}
          >
            {isLoggedIn ? "Account" : "Login"}
          </Link>
          <Link
            // onClick={toggleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
            to='/register'
          >

            {isLoggedIn ? "Logout" : "Register"}
          </Link>

          {/* Cart Icon */}
          <div className="relative">
            <Link
              to="/cart"
              className="text-gray-700 hover:text-blue-600 font-medium text-lg transition duration-300"
            >
              <FaShoppingCart className="text-2xl" />
              {/* Cart Item Count */}
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
