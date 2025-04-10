import React from "react";

const StoryCard = ({ title, image, description }) => {
  return (
    <div className="w-full bg-white/90 shadow-lg rounded-xl p-3 transition-all duration-300 hover:shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 my-2 cursor-pointer">
      {/* Left Side - Image */}
      <div className="w-full lg:w-4/12 h-40 sm:h-full overflow-hidden rounded-lg">
        <img
          className="w-full h-full md:h-[6rem] object-cover rounded-lg transition-transform duration-300 hover:scale-110"
          src={image}
          alt="Story Thumbnail"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-8/12 flex flex-col justify-center space-y-2">
        <p className="text-xs text-gray-500 font-bold tracking-wide uppercase">
          {title}
        </p>

        <p className="text-sm text-gray-800 font-bold ">
          {description ??
            "Explore the latest trends in modern kitchen interiors with expert insights."}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
