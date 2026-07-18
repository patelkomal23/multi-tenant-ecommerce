import React, { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";

const initialCategories = [
  {
    id: 1,
    name: "Mobiles",
    products: 25,
  },
  {
    id: 2,
    name: "Laptops",
    products: 18,
  },
  {
    id: 3,
    name: "Shoes",
    products: 42,
  },
  {
    id: 4,
    name: "Accessories",
    products: 15,
  },
  {
    id: 5,
    name: "Watches",
    products: 10,
  },
];

function AdminCategories() {
  const [search, setSearch] = useState("");

  const filteredCategories = initialCategories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Categories</h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search category..."
          className="w-full border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4">#</th>
              <th className="text-left px-6 py-4">Category</th>
              <th className="text-left px-6 py-4">Products</th>
              <th className="text-center px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredCategories.map((category, index) => (
              <tr
                key={category.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">{index + 1}</td>

                <td className="px-6 py-4 font-medium">
                  {category.name}
                </td>

                <td className="px-6 py-4">
                  {category.products}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">

                    <button className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600">
                      <Pencil size={18} />
                    </button>

                    <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminCategories;