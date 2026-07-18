import {
  Package,
  ShoppingCart,
  Users,
  IndianRupee,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Products",
      value: "250",
      icon: <Package size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Total Orders",
      value: "1,245",
      icon: <ShoppingCart size={28} />,
      color: "bg-green-500",
    },
    {
      title: "Customers",
      value: "580",
      icon: <Users size={28} />,
      color: "bg-purple-500",
    },
    {
      title: "Revenue",
      value: "₹4,85,000",
      icon: <IndianRupee size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-gray-500">{item.title}</p>
              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className={`${item.color} text-white p-4 rounded-full`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow mt-8 p-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Orders
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Order ID</th>
              <th className="text-left py-3">Customer</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">#1001</td>
              <td>Rahul</td>
              <td>₹4,500</td>
              <td className="text-green-600">Delivered</td>
            </tr>

            <tr className="border-b">
              <td className="py-3">#1002</td>
              <td>Ali</td>
              <td>₹2,200</td>
              <td className="text-yellow-600">Pending</td>
            </tr>

            <tr>
              <td className="py-3">#1003</td>
              <td>Priya</td>
              <td>₹8,100</td>
              <td className="text-blue-600">Shipped</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}