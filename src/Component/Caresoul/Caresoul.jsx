import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./mainCaroselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item, index) => (
    <div
      key={index}
      className="relative flex flex-col items-center justify-center"
    >
      <img
        className="cursor-pointer rounded-3xl w-full h-80 object-cover"
        src={item.image}
        alt={item.title} // Added alt attribute for accessibility
      />
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 text-white p-4 border border-stone-50/30 rounded-lg text-center w-3/4 font-serif">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-300 text-sm">{item.description}</p>
      </div>
    </div>
  ));

  // Define responsive behavior to show only one item at a time
  const responsive = {
    0: { items: 1 },      // 1 item for screens 0px and up
    768: { items: 1 },    // 1 item for screens 768px and up
    1024: { items: 1 },   // 1 item for screens 1024px and up
  };

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={2000}
      animationDuration={1000}
      animationType="fadeout"
      infinite
      touchTracking
      disableDotsControls
      disableButtonsControls
      items={items}
      responsive={responsive} // Apply responsive settings
    />
  );
};

export default MainCarousel;
