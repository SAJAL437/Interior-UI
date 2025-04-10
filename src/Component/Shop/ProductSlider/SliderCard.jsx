import React from "react";
import PropTypes from "prop-types";

const SliderCard = ({ product }) => {
  return (
    <div className="relative p-2 rounded-lg shadow-lg overflow-hidden cursor-pointer">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg w-full h-50 object-cover object-top object-cover transition-transform duration-500 ease-in-out"
      />

      {/* Product Name & Price Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white transition-opacity duration-500 ease-in-out">
        <h2 className="text-sm md:text-base font-semibold">{product.name}</h2>
        <p className="text-xs md:text-sm">${product.price || 324}</p>
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
    title: PropTypes.string,
    brand: PropTypes.string,
  }),
};

SliderCard.defaultProps = {
  product: {
    heading: "Elegant Home Interior",
    image: "https://via.placeholder.com/600x400",
    Client_description: "Client description not available.",
    Result_description: "Result description not available.",
    name: "Anonymous",
    title: "No description available",
    brand: "Unknown Brand",
  },
};

export default SliderCard;
