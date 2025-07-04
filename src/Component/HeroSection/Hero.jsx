import Navbar from "../navbar/Navbar";
import Carousel from "../Caresoul/Caresoul";
import { Router } from "react-router-dom";

const Demo1 = () => { 
  return (
    <>
      <Navbar />

      <div className="relative bg-img bg-cover bg-center sm:rounded-3xl">
        {/* Background overlay */}
        <div className="absolute inset-0 w-full sm:w-1/2 h-full p-5 bg-white/20 sm:rounded-l-3xl backdrop-blur-sm"></div>

        <div className="container mx-auto w-full h-full relative p-5">
          {/* Heading Section */}
          <div className="relative flex items-center justify-center md:justify-start text-white w-full mt-16 pt-5 md:mt-36">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-center md:text-left">
              Create
              <span className="rounded-lg bg-white/40 backdrop-blur-sm px-2">
                Your
              </span>
              <br />
              Space
            </h1>
          </div>

          {/* Text & Button Section */}
          <div className="w-full h-auto flex flex-col md:flex-row justify-between mt-4 gap-8">
            {/* Text Section */}
            <div className="text-gray-50 text-base sm:text-lg w-full md:w-2/5 mt-10">
              <p className="mb-4 leading-relaxed">
                Investing in good interior design adds value in the long run. An
                interior designer is well aware of the type of fixtures,
                lighting, drapes, paint, sofa, and carpeting that you should put
                in various parts of a house.
              </p>

              <a
                href="#"
                className="inline-block text-gray-50 bg-white/20 backdrop-blur-lg border border-stone-50/30 shadow-2xl shadow-gray-800 px-8 sm:px-16 py-2 text-center rounded-xl hover:bg-white/30 transition-all"
              >
                Explore More
              </a>
            </div>

            {/* Carousel Section */}
            <div className="w-full md:w-3/6 h-full md:pl-10 md:mt-16 lg:mt-0 relative md:bottom-28">
              <div className="h-full border p-2 rounded-3xl bg-white/10 backdrop-blur-sm border-stone-50/30 shadow-lg shadow-gray-500">
                <Carousel />
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo1;
