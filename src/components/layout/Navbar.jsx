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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <h1 className="cursor-pointer text-3xl sm:text-4xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            Shop
          </span>
          <span className="text-slate-900">Nest</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-semibold text-slate-800">
          {["Home", "Products", "Categories", "Cart"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group py-2"
            >
              <span className="transition-colors duration-300 group-hover:text-purple-600">
                {item}
              </span>

              {/* Underline */}
              <span className="absolute left-0 -bottom-0.5 h-[3px] w-0 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center w-72 px-4 py-2.5 bg-white border border-gray-200 rounded-full shadow-md transition-all duration-300 focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-100 hover:shadow-lg">
            <FiSearch className="text-purple-500 text-lg mr-2" />

            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Cart */}
          <button className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow-lg hover:scale-105 transition-all duration-300">
            <FiShoppingCart className="text-white text-2xl" />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>

          </button>

          {/* Login */}
          <button className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-purple-500 text-purple-600 text-sm font-medium hover:bg-purple-600 hover:text-white transition-all duration-300">
            <FiUser className="text-sm" />
            <span>Login</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/80 backdrop-blur-md border border-purple-200 shadow-md hover:bg-purple-50 transition-all duration-300"
          >
            {menuOpen ? (
              <FiX className="text-2xl text-purple-600" />
            ) : (
              <FiMenu className="text-2xl text-purple-600" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col p-6 gap-5 font-medium text-slate-700">

            <li
              className="cursor-pointer hover:text-purple-600 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>

            <li
              className="cursor-pointer hover:text-purple-600 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </li>

            <li
              className="cursor-pointer hover:text-purple-600 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Categories
            </li>

            <li
              className="cursor-pointer hover:text-purple-600 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </li>

            {/* Mobile Search */}
            <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 bg-gray-50 focus-within:border-purple-500">
              <FiSearch className="mr-2 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-full bg-transparent placeholder:text-gray-400"
              />
            </div>

            {/* Mobile Login */}
            <button className="flex items-center justify-center gap-2 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300">
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