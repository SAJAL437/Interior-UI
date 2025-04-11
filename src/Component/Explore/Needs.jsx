import React from "react";
import { LuAmpersand } from "react-icons/lu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Faqs from "../More/Faqs/Faqs";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SavingsIcon from "@mui/icons-material/Savings";
import SupportIcon from "@mui/icons-material/Support";
// import {
//   faCalendar,
//   faPiggyBank,
//   faParachuteBox,
// } from "@fortawesome/free-solid-svg-icons";

const Needs = () => {
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 py-10 mt-8 mb-5">
        <div className="container mx-auto w-full">
          {/* Header */}
          <div className="w-full text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
              Online Interior Design Services For Any Space
            </h1>
          </div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10 gap-10">
            <div className="w-full md:w-1/2 relative group overflow-hidden rounded-md p-2">
              <img
                className="rounded-3xl w-full max-w-md mx-auto cursor-pointer transition-transform duration-500 group-hover:scale-105"
                src="https://images.pexels.com/photos/3791130/pexels-photo-3791130.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Interior Design"
              />
            </div>

            <div className="w-full md:w-1/2 px-2 sm:px-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-gray-900 text-white rounded-full px-4 py-2 text-xl">
                  1
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  We Help You Find the Right Solutions
                </h2>
              </div>
              <p className="text-base md:text-lg text-justify">
                To start your design project, you'll complete a quick and easy
                questionnaire, let us know your preferences, attach photos of
                your room, and choose the inspiration you love.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center w-full mt-24 px-4 text-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-gray-900 text-white rounded-full px-4 py-2 text-xl">
                2
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-left">
                Receive custom proposals from multiple designers
              </h2>
            </div>
            <p className="max-w-3xl text-base md:text-lg mb-10 text-left">
              Collaborate with top designers to get personalized plans tailored
              to your space and taste — all from the comfort of your home.
            </p>
            <img
              className="w-full max-w-5xl rounded-lg"
              src="https://cdn.decorilla.com/imgp/png/a1ff2490-7b40-4dec-9f22-0d06b5e15c23/Online-interior-design-custom-proposals.png"
              alt="Custom Proposals"
            />
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center w-full mt-24 px-4 text-center">
            <h1 className="text-xl md:text-4xl font-bold mb-6">
              Ready to make your dream space a reality?
            </h1>
            <button className="border border-gray-800 text-gray-800 rounded-full px-6 sm:px-10 py-2 text-sm sm:text-base lg:text-lg cursor-pointer font-medium transition-all duration-500 ease-in-out hover:bg-gray-800 hover:text-white">
              LET'S GET STARTED
            </button>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full mt-24 gap-10">
            <div className="w-full md:w-1/2 px-2 sm:px-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-gray-900 text-white rounded-full px-4 py-2 text-xl">
                  3
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Order and Track Your Items
                </h2>
              </div>
              <p className="text-base md:text-lg text-justify">
                You'll have the flexibility to buy items at your own pace. Our
                concierge service ensures the best deals with exclusive
                discounts — saving you thousands!
              </p>
            </div>
            <div className="w-full md:w-1/2 relative group overflow-hidden rounded-md p-2">
              <img
                className="rounded-3xl w-full max-w-md mx-auto cursor-pointer transition-transform duration-500 group-hover:scale-105"
                src="https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_1280.jpg"
                alt="Track Orders"
              />
            </div>
          </div>

          {/* Comparison Table */}
          <div className="flex justify-center w-full mt-24 px-4">
            <div className="w-full overflow-x-auto max-w-6xl shadow-lg rounded-lg">
              <table className="min-w-full table-auto text-center border border-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-2xl">Features</th>
                    <th className="px-4 py-3">
                      <a href="#" className="font-serif text-xl">
                        EARNEST{" "}
                        <span className="flex justify-center items-center gap-1">
                          <LuAmpersand className="mt-1" /> FEAST
                        </span>
                      </a>
                    </th>
                    <th className="px-4 py-3 text-2xl">Traditional Design</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-gray-700">
                  {[
                    ["Price", "$549+", "$2,000+"],
                    ["Realistic 3D Model", "✔️", "✔️"],
                    ["Concepts From Multiple Designers", "✔️", "❌"],
                    ["Interactive Online Platform", "✔️", "❌"],
                    ["Trade Discounts on Furniture", "✔️", "❌"],
                    ["No Markups or Sale Pressure", "✔️", "❌"],
                  ].map(([feature, ours, traditional], idx) => (
                    <tr className="border-t" key={idx}>
                      <td className="px-4 py-3">{feature}</td>
                      <td className="px-4 py-3">{ours}</td>
                      <td className="px-4 py-3">{traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center w-full mt-24 px-4 text-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-gray-900 text-white rounded-full px-4 py-2 text-xl">
                4
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-left">
                Enjoy your dream room design!
              </h2>
            </div>
            <div className="relative group overflow-hidden rounded-md p-2">
              <img
                className="w-full max-w-5xl rounded-lg mx-auto cursor-pointer transition-transform duration-500 group-hover:scale-105"
                src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"
                alt="Finished Room"
              />
            </div>
          </div>

          {/* Final Highlights */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full mt-24 gap-10 relative top-10 mb-32 px-4">
            {/* Box 1 */}
            <div className="w-full text-center">
              <div className="w-full h-auto mx-auto border-t-2 border-l-2 border-r-2 rounded-3xl p-3 relative mt-4">
                <p className="text-sm absolute -top-3 left-1/2 -translate-x-1/2 w-fit bg-white px-2">
                  {/* <FontAwesomeIcon icon={faCalendar} /> */}
                  <EventAvailableIcon
                    fontSize="large"
                    className="text-green-600"
                  />
                </p>
                <p className="text-md md:text-lg mt-4 text-gray-900 font-serif">
                  Realistic 3D model & top professional help to take the
                  guesswork out of the designing process.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center">
              <div className="w-full h-auto mx-auto border-t-2 border-l-2 border-r-2 rounded-3xl p-3 relative mt-4">
                <p className="text-sm absolute -top-3 left-1/2 -translate-x-1/2 w-fit bg-white px-2">
                  <SavingsIcon fontSize="large" className="text-yellow-600" />
                </p>
                <p className="text-md md:text-lg mt-4 text-gray-900 font-serif">
                  Top talent for up to 80% less than traditional interior design
                  & trade discounts of 5% to 45% at the top vendors.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center">
              <div className="w-full h-auto mx-auto border-t-2 border-l-2 border-r-2 rounded-3xl p-3 relative mt-4 ">
                <p className="text-sm absolute -top-3 left-1/2 -translate-x-1/2 w-fit bg-white px-2">
                  {/* <FontAwesomeIcon icon={faParachuteBox} /> */}

                  <SupportIcon fontSize="large" className="text-indigo-600" />
                </p>
                <p className="text-md md:text-lg mt-4 text-gray-900 font-serif">
                  A fun and easy white-glove service including everything from
                  design to convenient ordering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto w-[100%] bg-gray-100 mt-9">
        <Faqs />
      </div>
    </div>
  );
};

export default Needs;
