import React, { useState } from "react";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";

const staffData = [
  {
    id: 1,
    name: "Sahil Sheikh",
    email: "sahil@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    email: "ayesha@gmail.com",
    role: "Sales Executive",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Mohit Patel",
    email: "mohit@gmail.com",
    role: "Support",
    status: "Active",
  },
];

function Staff() {
  const [search, setSearch] = useState("");

  const filteredStaff = staffData.filter(
    (staff) =>
      staff.name.toLowerCase().includes(search.toLowerCase()) ||
      staff.email.toLowerCase().includes(search.toLowerCase()) ||
      staff.role.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Staff</h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18} />
          Add Staff
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search staff..."
          className="w-full max-w-md border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4">#</th>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Role</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStaff.map((staff) => (
              <tr
                key={staff.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">{staff.id}</td>

                <td className="px-6 py-4 font-medium">
                  {staff.name}
                </td>

                <td className="px-6 py-4">
                  {staff.email}
                </td>

                <td className="px-6 py-4">
                  {staff.role}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      staff.status
                    )}`}
                  >
                    {staff.status}
                  </span>
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

export default Staff;