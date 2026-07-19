import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

function Hero() {
  const banners = [
    {
      id: 1,
      image: banner1,
      subtitle: "NEW COLLECTION 2026",
      title: "Discover Your Perfect Style",
      description:
        "Explore premium fashion, accessories, and exclusive collections crafted for every occasion.",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: banner2,
      subtitle: "LIMITED OFFER",
      title: "Exclusive Fashion Deals",
      description:
        "Grab exciting discounts on trending products before they're gone.",
      buttonText: "Shop Now",
    },
    {
      id: 3,
      image: banner3,
      subtitle: "SHOP NOW",
      title: "Trending Collection",
      description:
        "Discover the newest arrivals and upgrade your lifestyle today.",
      buttonText: "Explore",
    },
  ];
  return (
  <section className="w-full overflow-hidden">
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      loop
      speed={1000}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className="relative h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden">

            {/* Background Image */}
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700"
            />

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20"></div>

            {/* purple Glow */}
            <div className="absolute left-10 lg:left-24 top-1/2 -translate-y-1/2 w-60 h-60 lg:w-96 lg:h-96 bg-purple-500/20 blur-[120px] rounded-full"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center px-5 sm:px-8 lg:px-20">
              <div className="max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">

                <p className="uppercase tracking-[5px] text-purple-400 text-xs sm:text-sm font-semibold mb-3">
                  {banner.subtitle}
                </p>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  {banner.title}
                </h1>

                <p className="mt-4 text-gray-200 text-sm sm:text-base leading-7">
                  {banner.description}
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">

                  <button className="flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                    {banner.buttonText}
                    <FiArrowRight />
                  </button>

                  <button className="px-7 py-3 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                    Explore Collection
                  </button>

                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
}

export default Hero;