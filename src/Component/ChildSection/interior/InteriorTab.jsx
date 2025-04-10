import React, { useState } from "react";
import Popular from "./Popular";
import Privatehouse from "./Privatehouse";
import Hotels from "./Hotels";
import Apparments from "./Apparments";
import PrivateRooms from "./PrivateRooms";

export default function InteriorTab() {
  const [value, setValue] = useState("1");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full ">
      {/* ✅ Responsive Tab List */}
      <div className="border-b border-gray-300 overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-4 md:space-x-6 py-2 md:py-4">
          {[
            { label: "Popular", value: "1" },
            { label: "Private House", value: "2" },
            { label: "Executive Hotels", value: "3" },
            { label: "Appartments", value: "4" },
            { label: "Private Rooms", value: "5" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleChange(tab.value)}
              className={`text-xs sm:text-sm md:text-base px-3 py-2 rounded-lg transition ${
                value === tab.value
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Tab Content */}
      <div className="py-4 md:py-6">
        {value === "1" && <Popular />}
        {value === "2" && <Privatehouse />}
        {value === "3" && <Hotels />}
        {value === "4" && <Apparments />}
        {value === "5" && <PrivateRooms />}
      </div>
    </div>
  );
}
