import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

function Hero() {
  const banners = [
    {
      id: 1,
      image: banner1,
      title: "Discover Your Perfect Style",
      subtitle: "NEW COLLECTION 2026",
      description:
        "Explore premium fashion, accessories and exclusive collections crafted for every occasion.",
    },
    {
      id: 2,
      image: banner2,
      title: "Exclusive Fashion Deals",
      subtitle: "LIMITED OFFER",
      description:
        "Grab exciting discounts on trending products before they're gone.",
    },
    {
      id: 3,
      image: banner3,
      title: "Trending Collection",
      subtitle: "SHOP NOW",
      description:
        "Discover the newest arrivals and upgrade your lifestyle today.",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        speed={1000}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-[300px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[650px]">
              {/* Banner Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="text-center max-w-3xl -mt-6 sm:mt-0">
                  <p className="uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-white text-xs sm:text-sm md:text-base font-semibold mb-4">
                    {banner.subtitle}
                  </p>
                  <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                    {banner.title}
                  </h1>

                  <p className="mt-4 text-xs sm:text-base md:text-lg text-white leading-6 max-w-xs sm:max-w-xl mx-auto px-4">
                    {banner.description}
                  </p>

                  <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <button className="w-[90%] sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                      Shop Now
                    </button>

                    <button className="w-[90%] sm:w-auto px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition">
                      Explore
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