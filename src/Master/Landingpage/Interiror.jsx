import React from "react";
import Hero from "../../Component/HeroSection/Hero";
import Experience from "../../Component/ChildSection/Experience";
import Interiors from "../../Component/ChildSection/interior/Interiors";
import WhatweDo from "../../Component/ChildSection/Whatwedo/WhatweDo";
import Testenomial from "../../Component/ChildSection/testenomial/Testenomial";
import Subscription from "../../Component/ChildSection/Subscription";
import Shopping from "../../Component/ChildSection/Shopping/Shopping";
const Interior = () => {
  return (
    <div>
      <div className="mx-auto sm:p-2">
        <Hero />
        <Experience />
        <Interiors />
        <WhatweDo />
        <Shopping />
        <Testenomial />
        <Subscription />
      </div>
    </div>
  );
};

export default Interior;
