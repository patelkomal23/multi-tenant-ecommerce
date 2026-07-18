import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold  cursor-pointer">
          <span className="text-blue-600">
            Shop
          </span>
          <span className="text-black">Nest</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-bold text-gray-900">
          <li className="cursor-pointer hover:text-blue-600 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            Products
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            Categories
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            Cart
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50 focus-within:border-blue-500">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-44"
            />
          </div>

          {/* Cart */}
          <button className="relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            <FiShoppingCart className="text-xl" />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Login */}
          <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition">
            <FiUser />
            <span>Login</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-gray-700"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col p-6 gap-5 font-medium text-gray-700">
            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>

            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </li>

            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Categories
            </li>

            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </li>

            {/* Mobile Search */}
            <div className="flex items-center border rounded-full px-4 py-2">
              <FiSearch className="mr-2 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-full"
              />
            </div>

            {/* Mobile Login */}
            <button className="flex items-center justify-center gap-2 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              <FiUser />
              Login
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;