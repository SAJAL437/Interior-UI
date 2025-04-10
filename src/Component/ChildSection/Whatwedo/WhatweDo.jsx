import Companies from "./Companies";

const WhatweDo = () => {
  return (
    <div className="relative px-5 py-10 mt-8 mb-5 pb-5">
      <div className="container mx-auto w-full">
        {/* Heading Section */}
        <div className="w-full text-center">
          <div className="w-fit mx-auto border-t-2 border-l-2 border-r-2 rounded-3xl p-3 relative">
            <p className="text-sm absolute -top-3 left-1/2 -translate-x-1/2 w-fit bg-white px-2">
              WHAT WE DO
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
              Why Choose Us
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full text-center my-10 px-5 ">
          <p className="text-lg">
            At Prospecta, we believe that finding the perfect home is more than
            just a transaction—it&apos;s about <br />
            the people and the community that make a house a home.
          </p>
        </div>
        {/* Companies Section */}
        <Companies />
        {/* Guarantee Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-14">
          <div className="w-full md:w-1/3 h-[25rem] relative group overflow-hidden rounded-md">
            <img
              src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Guarantee"
              className="w-full cursor-pointer h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="w-full md:w-2/3 p-5">
            <div className="w-full mb-5">
              <div className="w-fit border-t-2 border-r-2 rounded-3xl p-3 relative">
                <p className="text-sm absolute uppercase -top-2 left-4 w-fit bg-white px-2">
                  Guarantee
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
                  Our Guarantee
                </h1>
              </div>
            </div>
            <p className="text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              autem, quam sed illo perspiciatis molestiae neque, facilis
              mollitia sint earum commodi ad ut, quisquam velit optio! Velit
              excepturi cupiditate voluptas!
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="inline-block bg-gray-300 text-gray-800 py-3 px-6 rounded-2xl text-lg hover:bg-gray-400 transition-colors"
              >
                Explore
              </a>
            </div>
          </div>
        </div>

        {/* Best Prices Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="w-full md:w-2/3 p-5">
            <div className="w-full mb-5">
              <div className="w-fit border-t-2 border-r-2 rounded-3xl p-3 relative">
                <p className="text-sm absolute uppercase -top-2 left-4 w-fit bg-white px-2">
                  Our Prices
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
                  Best Prices
                </h1>
              </div>
            </div>
            <p className="text-lg mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              autem, quam sed illo perspiciatis molestiae neque, facilis
              mollitia sint earum commodi ad ut, quisquam velit optio! Velit
              excepturi cupiditate voluptas!
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="inline-block bg-gray-300 text-gray-800 py-3 px-6 rounded-2xl text-lg hover:bg-gray-400 transition-colors"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 h-[25rem] relative group overflow-hidden rounded-md">
            <img
              src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Best Prices"
              className="w-full h-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatweDo;
