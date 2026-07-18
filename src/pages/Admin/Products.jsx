import React, { useMemo, useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";

const productData = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    category: "Mobile",
    price: 129999,
    stock: 12,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300",
  },
  {
    id: 2,
    name: "MacBook Air M4",
    category: "Laptop",
    price: 114999,
    stock: 8,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300",

  },
];

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(productData.map((item) => item.category)),
  ];

  const filteredProducts = useMemo(() => {
    return productData.filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || product.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="border rounded-lg px-4 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-cover rounded-lg"
            />

            <h2 className="text-lg font-semibold mt-4">
              {product.name}
            </h2>

            <p className="text-gray-500">
              {product.category}
            </p>

            <p className="text-blue-600 font-bold mt-2">
              ₹{product.price.toLocaleString()}
            </p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${
                product.stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {product.stock > 0
                ? `${product.stock} in Stock`
                : "Out of Stock"}
            </span>

            <div className="flex gap-3 mt-5">

              <button className="flex-1 flex justify-center items-center gap-2 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
                <Pencil size={16} />
                Edit
              </button>

              <button className="flex-1 flex justify-center items-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
                <Trash2 size={16} />
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;