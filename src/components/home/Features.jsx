import {
  FiTruck,
  FiShield,
  FiAward,
  FiHeadphones,
} from "react-icons/fi";

const features = [
  {
    icon: <FiTruck />,
    title: "Fast Delivery",
    description: "Get your products delivered fast",
  },
  {
    icon: <FiShield />,
    title: "Secure Payment",
    description: "100% secure payment guaranteed",
  },
  {
    icon: <FiAward />,
    title: "Premium Quality",
    description: "Best quality products always",
  },
  {
    icon: <FiHeadphones />,
    title: "24/7 Support",
    description: "We're here to help you anytime",
  },
];

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className={`group flex items-center gap-5 p-8 transition-all duration-300 hover:bg-purple-50 hover:-translate-y-1 ${
                index !== features.length - 1
                  ? "lg:border-r border-gray-200"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;