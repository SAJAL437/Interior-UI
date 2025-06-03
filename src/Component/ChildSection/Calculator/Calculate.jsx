import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CalImage = [
  {
    title: "Full Home Interior",
    description: "Discover the Estimated Cost of Transforming Your Home!",
    image:
      "https://cdn.pixabay.com/photo/2021/11/25/12/54/living-room-6823547_1280.png",
    path: "/home-interior-price-calculator",
  },
  {
    title: "Kitchen Interior",
    description: "Estimate the cost of designing your dream kitchen!",
    image:
      "https://cdn.pixabay.com/photo/2023/03/15/20/47/ai-generated-7855429_1280.jpg",
    path: "/kitchen-interior-price-calculator",
  },
  {
    title: "Wardrobe",
    description: "Get a Price Quote for Your Customized Wardrobe!",
    image:
      "https://www.ulcdn.net/images/products/956287/product/FNSGCB33BE36194_LP.jpg?1726470760",
    path: "/wardrobe-interior-price-calculator",
  },
];

const roomTitles = ["Kitchen", "Living Room", "Wardrobe", "Bathroom"];

const Calculate = () => {
  const navigate = useNavigate();
  const [currentTitle, setCurrentTitle] = useState(roomTitles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => {
        const nextIndex =
          (roomTitles.indexOf(prevTitle) + 1) % roomTitles.length;
        return roomTitles[nextIndex];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleCalculate = () => {
    navigate("/error-page");
  };

  return (
    <div className="relative px-4 py-6 mt-6 mb-4 pb-4">
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-center bg-imgcal bg-gray-100 rounded-3xl shadow-lg p-6">
          {/* Heading Section */}
          <div className="w-full text-center mt-4">
            <div className="w-fit mx-auto border-t-2 border-l-2 border-r-2 rounded-3xl p-3 border-gray-900 relative">
              <p className="text-sm absolute -top-3 left-1/2 -translate-x-1/2 w-fit bg-black text-gray-100 px-2 rounded-full">
                Calculate
              </p>
              <h1 className="text-xl text-gray-900 md:text-3xl font-bold font-serif">
                Get a Quick Estimate for Your{" "}
                <span className="underline">{currentTitle}</span>
              </h1>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center items-center gap-6 py-5 px-2 mt-8 w-full">
            {CalImage.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer flex flex-col items-center bg-white/10 backdrop-blur-2xl shadow-md border border-gray-200 rounded-lg overflow-hidden min-w-[280px] max-w-sm w-full p-5 hover:shadow-lg transition-all hover:-translate-y-3 ease-in-out duration-500"
              >
                {/* Image Section */}
                <div className="h-32 w-32 border-4 border-gray-200 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Button Section */}
                <button
                  onClick={() => handleCalculate("/error-page")}
                  className="border border-gray-700 rounded-3xl cursor-pointer px-6 py-2 mt-2 text-gray-700 hover:bg-gray-700 hover:text-white transition-all"
                >
                  <span className="text-sm font-semibold">Calculate Price</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
