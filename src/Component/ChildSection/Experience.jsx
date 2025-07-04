import { useEffect, useState } from "react";

const Experience = () => {
  const [homeForSale, setHomeForSale] = useState(0);
  const [homeSold, setHomeSold] = useState(0);
  const [otherProjects, setOtherProjects] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const animateNumber = (setter, target) => {
      let start = 0;
      const duration = 4000; // 4 seconds duration
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateNumber(setHomeForSale, 100);
    animateNumber(setHomeSold, 43000);
    animateNumber(setOtherProjects, 30);
  }, []);

  return (
    <div className="relative top-4 px-5 py-5">
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-14">
          <div className="w-full lg:w-2/3 p-5">
            <div className="w-full mb-5">
              <div className="w-fit border-t-2 border-r-2 rounded-3xl p-3 relative">
                <p className="text-sm absolute uppercase -top-2 left-4 w-fit bg-white px-2">
                  Experience
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
                  Our Experience
                </h1>
              </div>
            </div>
            <p className="text-lg mt-5">
              With 15 years of experience, we are ready to help you. Exponent is
              a pixel-perfect theme, tailor-made for startups and businesses.
              Build your website swiftly.
            </p>

            <div className="flex flex-col lg:flex-row justify-between items-center px-10 mt-8">
              <div className="text-center mb-4 md:mb-0">
                <h1 className="text-5xl font-serif animate-pulse">
                  {homeForSale}+
                </h1>
                <p className="text-xl mt-2">Homes for sale</p>
              </div>

              <div className="text-center mb-4 md:mb-0">
                <h1 className="text-5xl font-serif animate-pulse">
                  {homeSold}+
                </h1>
                <p className="text-xl mt-2">Homes recently sold</p>
              </div>

              <div className="text-center">
                <h1 className="text-5xl font-serif animate-pulse">
                  {otherProjects}+
                </h1>
                <p className="text-xl mt-2">Waiting List</p>
              </div>
            </div>
          </div>

          {/* Video Card with Hover Effect */}
          <div
            className="w-full lg:w-1/3 h-[25rem] relative group cursor-pointer overflow-hidden rounded-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <video
              className="w-full cursor-pointer h-full object-cover ease-in-out transition-transform duration-500"
              src="/public/videos/interior.mp4"
              // src="https://pin.it/1DPhp5tEb"
              autoPlay
              loop
              muted
            ></video>

            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/15 backdrop-blur-lg bg-opacity-50 text-white text-lg font-semibold transition-opacity duration-1000 cursor-pointer">
                <div className="text-center">
                  <h2 className="text-2xl">Discover Your Dream Home</h2>
                  <p className="mt-2">
                    Explore our listings and find the perfect place.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
