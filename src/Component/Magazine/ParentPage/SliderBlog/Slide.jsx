import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./Design.css";
import { products } from "./SlideData";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Slide = () => {
  return (
    <div className="relative px-5 py-6 mt-2 mb-4 pb-4">
      <div className="container-fluid mx-auto w-full">
        {/* Right Section - Carousel */}
        <div className="w-full  flex justify-center mt-4 lg:mt-0">
          <div className="flex justify-center items-center bg-white border shadow-lg shadow-gray-400 border-stone-200 rounded-tr-3xl rounded-bl-3xl p-3 sm:p-4 w-full max-w-sm sm:max-w-md md:max-w-5xl h-[34rem] ">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1} // Show 1 item on small screens
              breakpoints={{
                640: { slidesPerView: 1 }, // Mobile
                768: { slidesPerView: 1 }, // Tablet
                1024: { slidesPerView: 1 }, // Desktop
              }}
              spaceBetween={8}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="relative p-2 rounded-lg shadow-lg overflow-hidden cursor-pointer">
                    {/* Product Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-lg w-full h-[32rem]  object-cover transition-transform duration-500 ease-in-out"
                    />

                    {/* Product Name & Price Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end text-center p-8 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white transition-opacity duration-500 ease-in-out">
                      <h2 className="text-sm md:text-base font-semibold">
                        {product.name}
                      </h2>
                      <p className="text-md md:text-xl mb-5">{product.title}</p>
                      <div className="w-full text-start ">
                        <p className="text-xs md:text-sm mb-5 ">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
