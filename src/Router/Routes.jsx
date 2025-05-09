import React from "react";
import { Routes, Route } from "react-router-dom";
import Interior from "../Master/Landingpage/Interiror";
import MagzinePage from "../Master/Magzine/Page";
import Explore from "../Master/Explore/Explore";
import Giftsec from "../Master/Gift/Giftsec";
import Shop from "../Master/Market/Shop";
import Faqs from "../Component/More/Faqs/Faqs";
import About from "../Component/More/AboutandContact/About";
import Pricing from "../Component/More/Pricing/Pricing";
import Section from "../Component/More/Faqs/Section";
import Footer from "../Component/Footer/Footer";
import Contact from "../Component/More/Contact/Contact";

const RoutesSetting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Interior />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/blog" element={<MagzinePage />} />
        <Route path="/giftcards" element={<Giftsec />} />
        <Route path="/shop/products" element={<Shop />} />
        <Route path="/more/FAQS" element={<Section />} />
        <Route path="/more/about" element={<About />} />
        <Route path="/more/Pricing" element={<Pricing />} />
        <Route path="/more/contact" element={<Contact />} />
      </Routes>
      <div className="relative top-10">
        <Footer />
      </div>
    </>
  );
};

export default RoutesSetting;
