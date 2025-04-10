import React from "react";
import Products from "../../Component/Shop/Home.jsx/Main/Products";
import Slider from "../../Component/Shop/ProductSlider/Slider";
import Header from "../../Component/Shop/Home.jsx/Header/Header";
import Main from "../../Component/Shop/Home.jsx/Main/Main";

const Shop = () => {
  return (
    <div>
      <div className="mx-auto sm:p-2">
        <Header/>
        <Main/>
        <Products />
        
      </div>
    </div>
  );
};

export default Shop;
