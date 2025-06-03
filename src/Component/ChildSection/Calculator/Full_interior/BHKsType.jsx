import React from "react";

const BHKsType = () => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Select your BHK type</h2>
      </div>
      <ul className="space-y-2">
        {["1BHK", "2BHK", "3BHK"].map((type) => (
          <li
            key={type}   
            className="border rounded-md px-4 py-2 flex items-center gap-4 cursor-pointer hover:bg-gray-100"
          >
            <label className="flex items-center gap-4 w-full cursor-pointer">
              <input
                type="radio"
                name="bhk"
                value={type}
                className="cursor-pointer"
              />
              {type}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BHKsType;
