import {
    FiSearch,
    FiShoppingCart,
    FiUser,
    FiHeart,
    FiTruck,
    FiChevronDown,
    FiMenu,
    FiX,
} from "react-icons/fi";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-6 py-4">

                {/* Desktop Navbar */}
                <div className="hidden lg:flex items-center justify-between gap-6">

                    {/* Logo */}
                    <h1 className="text-4xl font-bold text-blue-600 cursor-pointer">
                        ShopNest
                    </h1>

                    {/* Search Area */}
                    <div className="flex items-center flex-1 max-w-3xl gap-3">

                        {/* Category */}
                        <div className="relative">
                            <button
                                onClick={() => setShowCategories(!showCategories)}
                                className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 hover:border-blue-600 transition"
                            >
                                <span>All Categories</span>
                                <FiChevronDown />
                            </button>

                            {showCategories && (
                                <ul className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                                        Home
                                    </li>

                                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                                        Products
                                    </li>

                                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                                        Categories
                                    </li>

                                    <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                                        Cart
                                    </li>
                                </ul>
                            )}
                        </div>

                        {/* Search */}
                        <div className="flex flex-1">
                            <div className="flex items-center w-full border border-gray-300 rounded-l-lg px-4">
                                <FiSearch className="text-gray-500 mr-2" />

                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full py-3 outline-none"
                                />
                            </div>

                            <button className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 transition">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-8">

                        <button className="flex items-center gap-2 hover:text-blue-600 transition">
                            <FiTruck className="text-xl" />
                            <span>Track Order</span>
                        </button>

                        <button className="flex items-center gap-2 hover:text-blue-600 transition">
                            <FiHeart className="text-xl" />
                            <span>Wishlist</span>
                        </button>

                        <button className="flex items-center gap-2 hover:text-blue-600 transition">
                            <FiUser className="text-xl" />
                            <span>Account</span>
                        </button>

                        <button className="relative">
                            <FiShoppingCart className="text-3xl" />

                            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                                0
                            </span>
                        </button>

                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="flex lg:hidden items-center justify-between">

                    <h1 className="text-3xl font-bold text-blue-600">
                        ShopNest
                    </h1>

                    <div className="flex items-center gap-4">

                        <button className="relative">
                            <FiShoppingCart className="text-3xl" />

                            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                                0
                            </span>
                        </button>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-3xl"
                        >
                            {menuOpen ? <FiX /> : <FiMenu />}
                        </button>

                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="lg:hidden mt-6 border-t pt-6 space-y-4">

                        <button className="w-full flex items-center justify-between border rounded-lg px-4 py-3">
                            <span>All Categories</span>
                            <FiChevronDown />
                        </button>

                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="flex-1 border rounded-l-lg px-4 py-3 outline-none"
                            />

                            <button className="bg-blue-600 text-white px-5 rounded-r-lg">
                                <FiSearch />
                            </button>
                        </div>

                        <button className="flex items-center gap-3">
                            <FiTruck />
                            Track Order
                        </button>

                        <button className="flex items-center gap-3">
                            <FiHeart />
                            Wishlist
                        </button>

                        <button className="flex items-center gap-3">
                            <FiUser />
                            Account
                        </button>

                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;