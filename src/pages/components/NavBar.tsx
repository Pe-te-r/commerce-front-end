import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-blue-600">
            Phantom Market
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition duration-300"
            >
              Items
            </a>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition duration-300"
            >
              Account
            </Link>
          </div>

          {/* Basket */}
          <div className="relative">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18l-2 13H5L3 3zm0 0l2-2m2 2h10m2-2l2 2m-6 9v1m-2-1v1m-2-1v1m2-5h4m-4-2v2m-2-2v2"
                />
              </svg>
              Basket
            </a>
            <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
              3
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
