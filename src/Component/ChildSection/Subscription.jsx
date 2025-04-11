const Subscription = () => {
  return (
    <div className="relative top-4 px-5 py-5">
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col items-center justify-center py-10 px-5  shadow-md rounded-lg mx-4 md:mx-auto w-full">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-900">
            Subscribe Our NewsLetter  📰
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Subscribe to our newsletter and never miss an update.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center w-full max-w-md mt-6 space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 text-gray-700"
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition duration-300"
            >
              Subscribe
            </button>
          </form>

          {/* Success Message Placeholder (optional) */}
          <p className="text-sm text-gray-500 mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
