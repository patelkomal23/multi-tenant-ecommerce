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
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-5 p-8 ${
                index !== features.length - 1
                  ? "lg:border-r border-gray-200"
                  : ""
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-3xl">
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1 leading-6">
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