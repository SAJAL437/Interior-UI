import React from "react";
import { LuAmpersand } from "react-icons/lu";
import { Link } from "react-router-dom";
import Steppers from "./Step";

const Bhk = () => {
  return (
    <div className="bg-white/20 backdrop-blur-2xl min-h-screen px-10 pt-4">
      <div className="flex justify-start items-center  w-full">
        <div className="w-fit px-9 py-1 border rounded-lg  bg-white/10 backdrop-blur-lg shadow-2xl border-stone-600">
          <Link to="/" className="font-serif text-xl">
            EARNEST{" "}
            <span className="flex text-center">
              <LuAmpersand className="mt-1" /> FEAST
            </span>{" "}
          </Link>
        </div>
      </div>

      <div className="border mt-16 px-10">
      <Steppers/>
      </div>
    </div>
  );
};

export default Bhk;
