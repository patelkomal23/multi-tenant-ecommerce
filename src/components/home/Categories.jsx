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
   
<div className="text-center mb-14">
  <span className="inline-block text-purple-600 font-semibold tracking-[4px] uppercase">
    Our Collections
  </span>

  <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">
    Explore
    <span className="text-purple-600"> Categories</span>
  </h2>

  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mx-auto mt-4"></div>

  <p className="mt-5 text-gray-500 max-w-xl mx-auto">
    Browse our handpicked collections and find products that match your style.
  </p>
</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="group bg-white rounded-3xl border border-gray-200 p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition-all duration-300">
                <Icon className="text-4xl text-purple-600 group-hover:text-white group-hover:scale-125 transition-all duration-300" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
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