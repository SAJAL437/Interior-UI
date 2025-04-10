import React from "react";
import Navbar from "../../navbar/Navbar";

const Pricing = () => {
  return (
    <div className="overflow-x-hidden p-2">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-96 bg-imgpri bg-cover bg-center sm:rounded-3xl shadow-md shadow-gray-600 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full p-5 bg-black/50 sm:rounded-3xl flex items-center justify-center">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-gray-100 text-5xl sm:text-7xl font-bold mt-5">
              Amazing Work Stress Free
            </h1>
            <p className="text-white text-base sm:text-lg mt-3">
              We don't release the payment until you approve the work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
