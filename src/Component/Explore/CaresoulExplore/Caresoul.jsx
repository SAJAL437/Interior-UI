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
        className="cursor-pointer rounded-3xl w-[30rem] h-80 object-cover"
        src={item.image}
        alt={item.title} // Added alt attribute for accessibility
      />
    </div>
  ));

  // Define responsive behavior to show only one item at a time
  const responsive = {
    0: { items: 1 }, // 1 item for screens 0px and up
    768: { items: 1 }, // 1 item for screens 768px and up
    1024: { items: 1 }, // 1 item for screens 1024px and up
  };

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={1000}
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
