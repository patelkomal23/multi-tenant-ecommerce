import React, { useState } from "react";
import { Search, Eye } from "lucide-react";

const orderData = [
  {
    id: "#ORD001",
    customer: "Sahil Sheikh",
    date: "16 Jul 2026",
    amount: 45999,
    status: "Delivered",
  },
  {
    id: "#ORD002",
    customer: "Rahul Sharma",
    date: "15 Jul 2026",
    amount: 12999,
    status: "Pending",
  },
  {
    id: "#ORD003",
    customer: "Ayesha Khan",
    date: "14 Jul 2026",
    amount: 8999,
    status: "Shipped",
  },
  {
    id: "#ORD004",
    customer: "Mohit Patel",
    date: "13 Jul 2026",
    amount: 23999,
    status: "Cancelled",
  },
  {
    id: "#ORD005",
    customer: "Priya Verma",
    date: "12 Jul 2026",
    amount: 6999,
    status: "Delivered",
  },
];

function Orders() {
  const [search, setSearch] = useState("");

  const filteredOrders = orderData.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Orders</h1>
      </div>

      <div className="relative max-w-md mb-6">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search by Order ID or Customer..."
          className="w-full border rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4">Order ID</th>
              <th className="text-left px-6 py-4">Customer</th>
              <th className="text-left px-6 py-4">Date</th>
              <th className="text-left px-6 py-4">Amount</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium">
                  {order.id}
                </td>

                <td className="px-6 py-4">
                  {order.customer}
                </td>

                <td className="px-6 py-4">
                  {order.date}
                </td>

                <td className="px-6 py-4 font-semibold">
                  ₹{order.amount.toLocaleString()}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Orders;