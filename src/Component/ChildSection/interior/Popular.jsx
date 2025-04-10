import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import InteriorCard from "./InteriorCard";
import { Design } from "./Design";

const Popular = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    480: { items: 2 },
    768: { items: 3 },
    1024: { items: 3 },
  };

  const items = Design.map((item) => (
    <div
      key={item.id}
      className="mx-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <InteriorCard product={item} />
    </div>
  ));

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="w-full p-5 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-5">
        Popular Designs
      </h2>
      <div className="relative">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          autoPlay
          autoPlayInterval={1000}
          infinite
          onSlideChanged={syncActiveIndex}
          stagePadding={{ paddingLeft: 10, paddingRight: 10 }} // Adds extra spacing
        />
      </div>
    </div>
  );
};

export default Popular;
