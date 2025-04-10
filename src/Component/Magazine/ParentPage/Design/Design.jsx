import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Design.css";
import { products } from "./DesignData";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Design = () => {
  return (
    <div className="relative px-5 py-6 mt-2 mb-4 pb-4">
      <div className="container-fluid mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center border-stone-800 bg-imgShop bg-bottom rounded-3xl shadow-lg shadow-gray-400 p-4">
          {/* Left Section - Text Content */}
          <div className="w-full lg:w-7/12 shopping flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
            <h2 className="text-4xl md:text-3xl font-bold text-gray-800">
              <span className="text-4xl md:text-5xl">D</span>esign Gallery
              
            </h2>
            <p className="text-xs md:text-xl font-bold text-gray-700 mt-2 px-2 lg:px-0">
            Get inspired by a range of design ideas for every room
            </p>
            <p className="text-xs md:text-sm  text-gray-800 mt-2 px-2 lg:px-0">
            Gain invaluable insight and expert advice, helping you transform your home into a true design masterpiece.


            </p>
            {/* <button className="mt-3 px-3 py-2 text-sm font-semi-bold text-white bg-indigo-500 rounded-full">
              Explore Products ..
            </button> */}
          </div>

          {/* Right Section - Carousel */}
          <div className="w-full lg:w-5/12 flex justify-center mt-4 lg:mt-0">
            <div className="flex justify-center items-center bg-white border shadow-lg shadow-gray-400 border-stone-200 rounded-tr-3xl rounded-bl-3xl p-3 sm:p-4 w-full max-w-sm sm:max-w-md md:max-w-lg">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1} // Show 1 item on small screens
                breakpoints={{
                  640: { slidesPerView: 1 }, // Mobile
                  768: { slidesPerView: 2 }, // Tablet
                  1024: { slidesPerView: 2 }, // Desktop
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
                        className="rounded-lg w-full h-50  object-cover transition-transform duration-500 ease-in-out"
                      />

                      {/* Product Name & Price Overlay */}
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white transition-opacity duration-500 ease-in-out">
                        <h2 className="text-sm md:text-base font-semibold">
                          {product.name}
                        </h2>
                        <p className="text-xs md:text-sm">{product.price}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
