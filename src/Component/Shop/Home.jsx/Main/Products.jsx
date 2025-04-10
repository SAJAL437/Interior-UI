import React from "react";
import Slider from "../../ProductSlider/Slider";
import { chairData } from "../../ProductSlider/Data/Chair";
import { carpetData } from "../../ProductSlider/Data/Carpet";
import { SoafaData } from "../../ProductSlider/Data/Soafa";
import { clock } from "../../ProductSlider/Data/Clock";
import { curtains } from "../../ProductSlider/Data/Curtains";
import { wallpaper } from "../../ProductSlider/Data/Wallpaper";
import { Tiles } from "../../ProductSlider/Data/Tiles";

const Products = () => {
  return (
    <div className="relative top-10">
      <Slider data={carpetData} section_Name="Carpet's" />
      <Slider data={curtains} section_Name="Curtain's" />
      <Slider data={wallpaper} section_Name="Wallpaer's for Walls" />
      <Slider data={clock} section_Name="Clock's" />
      <Slider data={Tiles} section_Name="Tile's" />
      <Slider data={SoafaData} section_Name="Soafa" />
      <Slider data={chairData} section_Name="Chairs" />
    </div>
  );
};

export default Products;
