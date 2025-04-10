import React from "react";
import ChairIcon from "@mui/icons-material/Chair";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PhoneIcon from "@mui/icons-material/Phone";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SliderCard from "./Giftslider.jsx/SliderCard";
import Slider from "./Giftslider.jsx/Slider";

const ideas = [
  {
    id: 1,
    icon: <ChairIcon fontSize="large" className="text-indigo-600" />,
    title: "Furniture Layouts",
    description:
      "Get expert furniture placement ideas tailored to your space and lifestyle.",
  },
  {
    id: 2,
    icon: <TipsAndUpdatesIcon fontSize="large" className="text-yellow-500" />,
    title: "Creative Design Tips",
    description:
      "Personalized insights to style your space beautifully and functionally.",
  },
  {
    id: 3,
    icon: <PhoneIcon fontSize="large" className="text-green-600" />,
    title: "One-on-One Support",
    description:
      "Talk to our interior experts and get real-time suggestions for your design.",
  },
  {
    id: 4,
    icon: <ViewInArIcon fontSize="large" className="text-pink-500" />,
    title: "3D Visualizations",
    description:
      "Preview your new interiors in 3D before making decisions or purchases.",
  },
  {
    id: 5,
    icon: <ColorLensIcon fontSize="large" className="text-blue-500" />,
    title: "Color & Material Boards",
    description:
      "Explore curated palettes and materials that suit your mood and theme.",
  },
];

const Idea = () => {
  return (
    <div className="flex justify-center flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="text-center w-full max-w-screen-md mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Online Interior Design Gift Cards Include
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          The finest personalized online interior design help.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-screen-xl px-2 mb-8">
        {ideas.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-transparent rounded-2xl text-center  hover:shadow-md transition-all duration-300 ease-in-out"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Slider */}
      <Slider />
      
    </div>
  );
};

export default Idea;
