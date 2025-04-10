import React from "react";
import Navbar from "../navbar/Navbar";

const Giftsection = () => {
  return (
    <div>
      <Navbar />

      <div className="relative w-full h-[28rem] sm:h-[32rem] lg:h-[36rem] bg-img_gift bg-cover bg-center sm:rounded-3xl shadow-lg shadow-gray-600 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full p-5 bg-black/40 sm:rounded-3xl flex items-center justify-center">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug mb-4">
              Gift a Home that Speaks in Style
              <br className="hidden sm:block" />
              Every corner, a story. Every detail, a dream.
            </h1>

            <p className="text-white text-sm sm:text-base md:text-lg mt-2 sm:mt-4 max-w-2xl mx-auto">
            "The perfect design is the perfect gift — give the gift of inspired interiors."
            </p>

            <button className="mt-6 border border-white text-white rounded-full px-6 sm:px-10 py-2 text-sm sm:text-base lg:text-lg font-medium hover:bg-white/10 hover:backdrop-blur-lg hover:text-white  transition-all cursor-pointer duration-500 ease-in-out">
              Purchase your Design !!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giftsection;
