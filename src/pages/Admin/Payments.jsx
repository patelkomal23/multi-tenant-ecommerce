import React, { useState } from "react";
import { Search, CreditCard } from "lucide-react";

const paymentData = [
  {
    id: "#PAY001",
    orderId: "#ORD001",
    customer: "Sahil Sheikh",
    amount: 45999,
    method: "UPI",
    status: "Paid",
    date: "16 Jul 2026",
  },
  {
    id: "#PAY002",
    orderId: "#ORD002",
    customer: "Rahul Sharma",
    amount: 12999,
    method: "Credit Card",
    status: "Pending",
    date: "15 Jul 2026",
  },
  {
    id: "#PAY003",
    orderId: "#ORD003",
    customer: "Ayesha Khan",
    amount: 8999,
    method: "Cash on Delivery",
    status: "Failed",
    date: "14 Jul 2026",
  },
  {
    id: "#PAY004",
    orderId: "#ORD004",
    customer: "Mohit Patel",
    amount: 24999,
    method: "Net Banking",
    status: "Paid",
    date: "13 Jul 2026",
  },
];

function Payments() {
  const [search, setSearch] = useState("");

  const filteredPayments = paymentData.filter(
    (payment) =>
      payment.customer.toLowerCase().includes(search.toLowerCase()) ||
      payment.orderId.toLowerCase().includes(search.toLowerCase()) ||
      payment.id.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Payments</h1>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Payment, Order or Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4">Payment ID</th>
              <th className="text-left px-6 py-4">Order ID</th>
              <th className="text-left px-6 py-4">Customer</th>
              <th className="text-left px-6 py-4">Amount</th>
              <th className="text-left px-6 py-4">Method</th>
              <th className="text-left px-6 py-4">Date</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredPayments.map((payment) => (
              <tr
                key={payment.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">{payment.id}</td>

                <td className="px-6 py-4">{payment.orderId}</td>

                <td className="px-6 py-4">{payment.customer}</td>

                <td className="px-6 py-4 font-semibold">
                  ₹{payment.amount.toLocaleString()}
                </td>

                <td className="px-6 py-4">{payment.method}</td>

                <td className="px-6 py-4">{payment.date}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      payment.status
                    )}`}
                  >
                    {payment.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                    <CreditCard size={18} />
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

export default Payments;