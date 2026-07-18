import React, { useState } from "react";
import { Search, Eye, Trash2 } from "lucide-react";

const customerData = [
  {
    id: 1,
    name: "Sahil Sheikh",
    email: "sahil@gmail.com",
    phone: "+91 9876543210",
    orders: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543211",
    orders: 7,
    status: "Active",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    email: "ayesha@gmail.com",
    phone: "+91 9876543212",
    orders: 3,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Mohit Patel",
    email: "mohit@gmail.com",
    phone: "+91 9876543213",
    orders: 15,
    status: "Blocked",
  },
];

function Customers() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customerData.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-yellow-100 text-yellow-700";
      case "Blocked":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Customers</h1>
      </div>

      <div className="relative max-w-md mb-6">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">#</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Orders</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">{customer.id}</td>

                <td className="px-6 py-4 font-medium">
                  {customer.name}
                </td>

                <td className="px-6 py-4">
                  {customer.email}
                </td>

                <td className="px-6 py-4">
                  {customer.phone}
                </td>

                <td className="px-6 py-4">
                  {customer.orders}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      customer.status
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">

                    <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                      <Eye size={18} />
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

export default Customers;