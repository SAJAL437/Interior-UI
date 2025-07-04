import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"; // Import Alice Carousel styles

const Companies = () => {
  const companies = [
    { src: "/public/images/amazon.svg", alt: "Facebook" },
    { src: "/public/images/coca-cola.svg", alt: "Disney" },
    { src: "/public/images/instagram.svg", alt: "Airbnb" },
    { src: "/public/images/tesla.svg", alt: "Apple" },
    { src: "/public/images/spacex.svg", alt: "Spark" },
    { src: "/public/images/samsung.svg", alt: "Samsung" },
    { src: "/public/images/sony.svg", alt: "Quora" },
    { src: "/public/images/nike-3.svg", alt: "Sass" },
    { src: "/public/images/netflix-2.svg", alt: "Sass" },
    { src: "/public/images/microsoft-azure.svg", alt: "Sass" },
  ];

  const items = companies.map((company, index) => (
    <div key={index} className="flex justify-center items-center p-4">
      <img
        src={company.src}
        alt={company.alt}
        className="h-24 object-contain"
      />
    </div>
  ));

  return (
    <div className="w-full py-8 bg-transparent rounded-2xl">
      {/* <h2 className="text-center text-2xl font-semibold mb-4">Our Partners</h2> */}
      <AliceCarousel
        items={items}
        responsive={{
          0: { items: 3 },
          480: { items: 4 },
          768: { items: 5 },
          1024: { items: 6 },
        }}
        autoPlay
        infinite
        disableButtonsControls
        disableDotsControls
      />
    </div>
  );
};

export default Companies;
