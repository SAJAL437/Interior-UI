import InteriorTab from "../interior/InteriorTab";

const Interiors = () => {
  return (
    <>
      <div className="relative px-5 py-10 mt-8 mb-5">
        <div className="container mx-auto w-full">
          {/* Heading Section */}
          <div className="w-full">
            <div className="w-fit mx-auto border-t-2 border-l-2 rounded-3xl p-3 relative">
              <p className="text-sm absolute -top-2 left-2 w-fit bg-white px-1">
                OUR INTERIOR
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
                Interior
              </h1>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center relative top-8 my-14">
            <p className="text-xl w-full md:w-4/6 mb-4 md:mb-0">
              Better Homes & Gardens encourages its clients to expect more from
              their realtor and <br /> promises they are up to the challenge.
            </p>

            <a
              href="#"
              className="relative text-lg border border-stone-50/100 text-gray-50 px-10 py-2 rounded-3xl bg-gray-400 hover:bg-gray-500 transition duration-300"
            >
              Explore
            </a>
          </div>

          {/* Interior Gallery */}
          <div className="">
            <InteriorTab />
          </div>
        </div>
      </div>
    </>
  );
};

export default Interiors;
