import React from "react";
import Navbar from "../../navbar/Navbar";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { LuAmpersand } from "react-icons/lu";
const ideas = [
  {
    id: 1,
    icon: <MilitaryTechIcon fontSize="large" className="text-yellow-950" />,
    title: "Bronze",
    price: "322",
    experience: "2 experienced designers",
  },
  {
    id: 2,
    icon: <MilitaryTechIcon fontSize="large" className="text-gray-500" />,
    title: "Silver",
    price: "655",
    experience: "2 greatly experienced designers",
  },
  {
    id: 3,
    icon: <MilitaryTechIcon fontSize="large" className="text-yellow-600" />,
    title: "Gold",
    price: "899",
    experience: "2 industry leading designers",
  },
];

const Pricing = () => {
  return (
    <div className="overflow-x-hidden p-2">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-96 bg-imgpri bg-cover bg-center sm:rounded-3xl shadow-md shadow-gray-600 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full p-5 bg-black/50 sm:rounded-3xl flex items-center justify-center">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-gray-100 text-5xl sm:text-7xl font-bold mt-5">
              Amazing Work Stress Free
            </h1>
            <p className="text-white text-base sm:text-lg mt-3">
              We don't release the payment until you approve the work
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full justify-center items-center py-22">
        <div className=" w-full mx-auto container px-4 text-center">
          <h2 className="text-xl md:text-4xl">
            Show me the flat rate price for a:{" "}
            <span className="underline text-yellow-600">Hallway/Entry</span>
            <p className="text-sm mt-2">
              <span className="underline text-yellow-600 cursor-pointer">
                Choose mumtiple things
              </span>{" "}
              and save 10% today
            </p>
          </h2>
        </div>

        <div className="flex bg-cover bg-bottom justify-center flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl px-2">
            {ideas.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-6 cursor-pointer hover:translate-y-1.5 transition-all duration-500 text-center text-yellow-600"
              >
                <div className="mb-4 flex justify-center text-3xl sm:text-4xl md:text-5xl">
                  {item.icon}
                </div>
                <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-2 text-yellow-900">
                  {item.title}
                </h2>
                <p className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2 text-yellow-900">
                  ${item.price}
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-yellow-600 underline">
                  {item.experience}
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-yellow-600">
                  submit concept for you
                </p>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-center items-center mt-6 sm:mt-8">
            <button className="px-8 sm:px-10 md:px-14 py-2 rounded-lg text-base sm:text-lg cursor-pointer bg-yellow-900 hover:bg-amber-700 duration-500 ease-in-out text-white">
              Start a Project Now !!
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full mt-24 px-4">
          <div className="w-full overflow-x-auto max-w-6xl shadow-lg rounded-lg">
            <table className="min-w-full table-auto text-center border border-gray-200">
              <thead className="bg-yellow-900 text-white">
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
              <tbody className="bg-white text-yellow-700">
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

        <div className="flex flex-col items-center w-full mt-24 px-4 text-center">
          <h1 className="text-xl md:text-4xl font-bold mb-6">
            Not sure what's right for you? Need a custom or business quote?
          </h1>
          <button className="px-8 sm:px-10 md:px-14 py-2 rounded-lg text-base sm:text-lg cursor-pointer bg-yellow-900 hover:bg-amber-700 duration-500 ease-in-out text-white">
            SCHEDULE A CONSULTAION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
