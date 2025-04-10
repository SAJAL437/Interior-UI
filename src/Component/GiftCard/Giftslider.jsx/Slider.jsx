import { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import SliderCard from "./SliderCard";
import { Data } from "./SliderData";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const responsive = {
    0: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
  };

  const items = Data.map((item) => (
    <div key={item.id} className="mx-2  ">
      <SliderCard product={item} />
    </div>
  ));

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const slidePrev = () => {
    carouselRef.current.slidePrev();
  };

  const slideNext = () => {
    carouselRef.current.slideNext();
  };

  return (
    <div className="w-full p-5 relative">
      <AliceCarousel
        ref={carouselRef}
        items={items}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        activeIndex={activeIndex}
        autoPlay
        autoPlayInterval={2000}
        infinite
        onSlideChanged={syncActiveIndex}
        stagePadding={{ paddingLeft: 10, paddingRight: 10 }}
      />

      {/* Custom Arrows */}
      <button
        onClick={slidePrev}
        className="absolute invisible lg:visible left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={slideNext}
        className="absolute invisible lg:visible right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Slider;
