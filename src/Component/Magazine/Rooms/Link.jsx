import React from "react";
import { LuAmpersand } from "react-icons/lu";

const categories = [
  "Homes",
  "Apartments",
  "Villas",
  "Offices",
  "Modular Kitchen",
  "Living Room",
  "Balconies",
  "Study Room",
  "Wardrobes",
  "Kids Room",
  "Pooja Room",
  "Bathrooms",
];

const Link = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center w-full max-w-screen-md mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Explore Your Dream, Just a Click Away
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 w-full max-w-6xl">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center justify-start sm:justify-center text-sm sm:text-base md:text-lg font-semibold gap-2 text-gray-600 hover:text-black transition-all duration-300"
          >
            <LuAmpersand className="text-gray-400 text-lg sm:text-xl" />
            <span className="truncate">{category}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Link;
