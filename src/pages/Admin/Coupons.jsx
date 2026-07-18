import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";

const couponData = [
  {
    id: 1,
    code: "WELCOME10",
    discount: "10%",
    type: "Percentage",
    expiry: "31 Dec 2026",
    status: "Active",
  },
  {
    id: 2,
    code: "SAVE500",
    discount: "₹500",
    type: "Flat",
    expiry: "20 Aug 2026",
    status: "Active",
  },
  {
    id: 3,
    code: "FESTIVE20",
    discount: "20%",
    type: "Percentage",
    expiry: "10 Oct 2026",
    status: "Expired",
  },
  {
    id: 4,
    code: "NEWUSER",
    discount: "15%",
    type: "Percentage",
    expiry: "15 Sep 2026",
    status: "Active",
  },
];

function Coupons() {
  const [search, setSearch] = useState("");

  const filteredCoupons = couponData.filter(
    (coupon) =>
      coupon.code.toLowerCase().includes(search.toLowerCase()) ||
      coupon.type.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Expired":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Coupons</h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18} />
          Add Coupon
        </button>
      </div>

      <div className="relative max-w-md mb-6">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search coupon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4">#</th>
              <th className="text-left px-6 py-4">Coupon Code</th>
              <th className="text-left px-6 py-4">Discount</th>
              <th className="text-left px-6 py-4">Type</th>
              <th className="text-left px-6 py-4">Expiry</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredCoupons.map((coupon) => (
              <tr
                key={coupon.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">{coupon.id}</td>

                <td className="px-6 py-4 font-semibold">
                  {coupon.code}
                </td>

                <td className="px-6 py-4">
                  {coupon.discount}
                </td>

                <td className="px-6 py-4">
                  {coupon.type}
                </td>

                <td className="px-6 py-4">
                  {coupon.expiry}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      coupon.status
                    )}`}
                  >
                    {coupon.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">

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

export default Coupons;