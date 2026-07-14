import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Navbar */}

                {/* logo */}
                <h1 className="text-2xl font-bold text-blue-600">
                    ShopNest
                </h1>

                {/* menu */}

                <ul className="flex gap-8">
                    <li className="cursor-pointer hover:text-blue-600">Home</li>
                    <li className="cursor-pointer hover:text-blue-600">Products</li>
                    <li className="cursor-pointer hover:text-blue-600">Categories</li>
                    <li className="cursor-pointer hover:text-blue-600">Cart</li>
                </ul>
                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* Search Box */}
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-blue-500">
                        <FiSearch className="text-gray-500 mr-2" />

                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none w-full"
                        />
                    </div>

                    {/* Cart Button */}
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        <FiShoppingCart />
                        Cart
                        <span className="bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded-full">0</span>
                    </button>

                    {/* Login Button */}
                    <button className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition duration-300">
                        <FiUser />
                        Login
                    </button>

                </div>
            </div>
        </nav>
    );

}
export default Navbar;