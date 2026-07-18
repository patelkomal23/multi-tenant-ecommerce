import React, { useState } from "react";
import { Search, Truck } from "lucide-react";

const shippingData = [
  {
    id: "#SHIP001",
    orderId: "#ORD001",
    customer: "Sahil Sheikh",
    courier: "Blue Dart",
    tracking: "BD458796321",
    status: "Delivered",
  },
  {
    id: "#SHIP002",
    orderId: "#ORD002",
    customer: "Rahul Sharma",
    courier: "Delhivery",
    tracking: "DL785412369",
    status: "In Transit",
  },
  {
    id: "#SHIP003",
    orderId: "#ORD003",
    customer: "Ayesha Khan",
    courier: "DTDC",
    tracking: "DT963258741",
    status: "Pending",
  },
  {
    id: "#SHIP004",
    orderId: "#ORD004",
    customer: "Mohit Patel",
    courier: "Ekart",
    tracking: "EK987456321",
    status: "Delivered",
  },
];

function Shipping() {
  const [search, setSearch] = useState("");

  const filteredShipping = shippingData.filter(
    (item) =>
      item.customer.toLowerCase().includes(search.toLowerCase()) ||
      item.orderId.toLowerCase().includes(search.toLowerCase()) ||
      item.tracking.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "In Transit":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">Shipping</h1>

      <div className="relative max-w-md mb-6">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search Order, Customer or Tracking..."
          className="w-full border rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Shipment ID</th>
              <th className="px-6 py-4 text-left">Order ID</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Courier</th>
              <th className="px-6 py-4 text-left">Tracking ID</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredShipping.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">{item.id}</td>

                <td className="px-6 py-4">{item.orderId}</td>

                <td className="px-6 py-4">{item.customer}</td>

                <td className="px-6 py-4">{item.courier}</td>

                <td className="px-6 py-4 font-medium">
                  {item.tracking}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                    <Truck size={18} />
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

export default Shipping;