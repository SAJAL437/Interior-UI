import PropTypes from "prop-types";

const InteriorCard = ({ product = {} }) => {
  return (
    <div className="cursor-pointer  flex flex-col items-center bg-white rounded-lg overflow-hidden max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto px-3 py-5 mb-3 ">
      {/* Image Section */}
      <div className="h-72 w-full">
        <img
          className="object-cover object-top w-full h-full rounded-lg"
          src={product.image || "/placeholder.jpg"} // ✅ Fallback Image
          alt={product.title || "Product Image"}
        />
      </div>
      {/* Content Section */}
      <div className="p-4 text-start">
        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
          {product.name || "Unknown Brand"}
        </h3>
        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          {product.description || "No description available"}
        </p>
      </div>
    </div>
  );
};

// ✅ Add PropTypes Validation
InteriorCard.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string, // 🔥 Fixed prop name to match usage
  }),
};

// ✅ Provide Default Props to Avoid Errors
InteriorCard.defaultProps = {
  product: {
    brand: "Unknown Brand",
    title: "No description available",
    image: "/placeholder.jpg", // A default placeholder image
  },
};

export default InteriorCard;
