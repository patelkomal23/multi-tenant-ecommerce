import React from "react";
import {
  IndianRupee,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
} from "lucide-react";

const topProducts = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    sold: 120,
    revenue: "₹1,55,99,880",
  },
  {
    id: 2,
    name: "MacBook Air M4",
    sold: 75,
    revenue: "₹86,24,925",
  },
  {
    id: 3,
    name: "Nike Air Max",
    sold: 180,
    revenue: "₹14,39,820",
  },
  {
    id: 4,
    name: "Sony Headphones",
    sold: 95,
    revenue: "₹5,69,905",
  },
];

function Analytics() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Analytics
      </h1>

      {/* Stats Cards */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Revenue</p>
              <h2 className="text-2xl font-bold mt-2">
                ₹12,45,600
              </h2>
            </div>

            <div className="bg-green-100 p-3 rounded-full">
              <IndianRupee className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Orders</p>
              <h2 className="text-2xl font-bold mt-2">
                1,245
              </h2>
            </div>

            <div className="bg-blue-100 p-3 rounded-full">
              <ShoppingCart className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Customers</p>
              <h2 className="text-2xl font-bold mt-2">
                850
              </h2>
            </div>

            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Products Sold</p>
              <h2 className="text-2xl font-bold mt-2">
                2,430
              </h2>
            </div>

            <div className="bg-orange-100 p-3 rounded-full">
              <Package className="text-orange-600" />
            </div>
          </div>
        </div>

      </div>

      {/* Top Products */}

      <div className="bg-white rounded-xl shadow">

        <div className="flex items-center gap-2 p-6 border-b">
          <TrendingUp className="text-blue-600" />
          <h2 className="text-xl font-semibold">
            Top Selling Products
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-6 py-4">#</th>
                <th className="text-left px-6 py-4">Product</th>
                <th className="text-left px-6 py-4">Units Sold</th>
                <th className="text-left px-6 py-4">Revenue</th>
              </tr>
            </thead>

            <tbody>

              {topProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    {product.id}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {product.name}
                  </td>

                  <td className="px-6 py-4">
                    {product.sold}
                  </td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    {product.revenue}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Analytics;