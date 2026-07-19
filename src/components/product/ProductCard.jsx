import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* Image */}
      <div className="relative h-60 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
          <FiHeart />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2 text-yellow-500">
          <FiStar className="fill-yellow-400" />
          <span className="text-gray-600 text-sm">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-xl font-bold text-purple-600">
            ₹{product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>
        </div>

        {/* Button */}
        <button className="mt-5 w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;