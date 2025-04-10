import React from "react";
import Faqs from "./Faqs";
import Navbar from "../../navbar/Navbar";

const Section = () => {
  return (
    <div className="bg-black/40 backdrop-blur-lg">
      <Navbar />
      <Faqs />
    </div>
  );
};

export default Section;
