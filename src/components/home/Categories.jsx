import {
  FiMonitor,
  FiShoppingBag,
  FiWatch,
  FiSmartphone,
} from "react-icons/fi";
import { GiRunningShoe } from "react-icons/gi";

const categories = [
  {
    id: 1,
    title: "Fashion",
    icon: FiShoppingBag,
  },
  {
    id: 2,
    title: "Electronics",
    icon: FiMonitor,
  },
  {
    id: 3,
    title: "Shoes",
    icon: GiRunningShoe,
  },
  {
    id: 4,
    title: "Watches",
    icon: FiWatch,
  },
  {
    id: 5,
    title: "Mobiles",
    icon: FiSmartphone,
  },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
        Shop by Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="group bg-white rounded-3xl border border-gray-200 p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition-all duration-300">
                <Icon className="text-4xl text-blue-600 group-hover:text-white group-hover:scale-125 transition-all duration-300" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {category.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-500 text-sm">
                Explore Collection
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;