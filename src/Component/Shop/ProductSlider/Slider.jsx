import { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import SliderCard from "./SliderCard";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Slider = ({ data, section_Name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const responsive = {
    0: { items: 2 },
    480: { items: 2 },
    640: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1280: { items: 5 },
  };

  const items = Array.isArray(data)
    ? data.map((item, index) => (
        <div key={item.id || index} className="mx-2">
          <SliderCard product={item} />
        </div>
      ))
    : [];

  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const slidePrev = () => carouselRef.current.slidePrev();
  const slideNext = () => carouselRef.current.slideNext();

  return (
    <div className="w-full px-3 sm:px-5 md:px-10 py-5 relative mb-10">
      <h2 className="text-xl font-semibold mb-4 ml-2">{section_Name}</h2>
      <AliceCarousel
        ref={carouselRef}
        items={items}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        activeIndex={activeIndex}
        infinite
        mouseTracking
        touchTracking
        onSlideChanged={syncActiveIndex}
        stagePadding={{ paddingLeft: 10, paddingRight: 10 }}
        className="relative top-7"
      />

      {/* Arrows visible on sm and up */}
      <button
        onClick={slidePrev}
        className="absolute  sm:flex left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={slideNext}
        className="absolute  sm:flex right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Slider;
