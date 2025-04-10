import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import PropTypes from "prop-types";

const SliderCard = ({ product }) => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-6 sm:gap-8 items-center">
        {/* Heading */}
        <div className="w-full text-start">
          <h2 className="text-gray-900 text-md sm:text-lg md:text-xl font-bold uppercase tracking-wide">
            {product?.heading}
          </h2>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[18rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] relative group overflow-hidden rounded-xl shadow-md">
            <img
              src={product?.image}
              alt="Project"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Client Challenge */}
            <div className="bg-tranparent rounded-lg p-4 ">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Client's Challenge
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product?.Client_description}
              </p>
            </div>

            {/* Result */}
            <div className="bg-transparent rounded-lg p-4 ">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Result
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {product?.Result_description}
              </p>

              <p className="text-sm font-medium text-gray-700 mt-8">
                — {product?.name}
              </p>

              {/* Ratings */}
              <div className="flex mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <StarRateIcon key={index} className="text-yellow-600" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderCard.propTypes = {
  product: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.string,
    Client_description: PropTypes.string,
    Result_description: PropTypes.string,
    name: PropTypes.string,
  }),
};

SliderCard.defaultProps = {
  product: {
    heading: "Elegant Home Interior",
    image: "https://via.placeholder.com/600x400",
    Client_description: "Client description not available.",
    Result_description: "Result description not available.",
    name: "Anonymous",
  },
};

export default SliderCard;
