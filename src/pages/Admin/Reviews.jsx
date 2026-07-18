import React, { useState } from "react";
import { Search, Star, Trash2 } from "lucide-react";

const reviewData = [
  {
    id: 1,
    customer: "Sahil Sheikh",
    product: "iPhone 16 Pro",
    rating: 5,
    comment: "Excellent product. Highly recommended!",
    status: "Approved",
  },
  {
    id: 2,
    customer: "Rahul Sharma",
    product: "MacBook Air M4",
    rating: 4,
    comment: "Very good performance.",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Ayesha Khan",
    product: "Nike Air Max",
    rating: 3,
    comment: "Average quality.",
    status: "Rejected",
  },
  {
    id: 4,
    customer: "Mohit Patel",
    product: "Sony Headphones",
    rating: 5,
    comment: "Amazing sound quality!",
    status: "Approved",
  },
];

function Reviews() {
  const [search, setSearch] = useState("");

  const filteredReviews = reviewData.filter(
    (review) =>
      review.customer.toLowerCase().includes(search.toLowerCase()) ||
      review.product.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reviews</h1>
      </div>

      <div className="relative max-w-md mb-6">
        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search customer or product..."
          className="w-full border rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Rating</th>
              <th className="px-6 py-4 text-left">Review</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredReviews.map((review) => (
              <tr key={review.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{review.customer}</td>

                <td className="px-6 py-4">{review.product}</td>

                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </td>

                <td className="px-6 py-4">{review.comment}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      review.status
                    )}`}
                  >
                    {review.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
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

export default Reviews;