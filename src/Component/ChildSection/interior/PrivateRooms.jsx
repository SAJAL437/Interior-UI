const images = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/98/45/5a/98455a2e55494e6a885c95b56123672b.jpg",
    title: "Luxury Private House",
    description:
      "A stunning modern house with elegant interiors and breathtaking views.",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/8d/34/33/8d3433dbbea7f8e311b25c5469ec20f3.jpg",
    title: "Modern Mansion",
    description:
      "A spacious and luxurious mansion with top-notch architecture.",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/b5/0d/ae/b50daee41241aa9ee09682290848b6e4.jpg",
    title: "Elegant Villa",
    description:
      "A beautiful villa with breathtaking sunset views and a private pool.",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/e7/83/55/e78355a2f5a17fb99abad7d000d48e07.jpg",
    title: "Elegant Villa",
    description:
      "A beautiful villa with breathtaking sunset views and a private pool.",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/80/f7/6a/80f76ade87df8312ece2bbcd42c7da36.jpg",
    title: "Elegant Villa",
    description:
      "A beautiful villa with breathtaking sunset views and a private pool.",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/7e/ef/ef/7eefefb5a2ad91513a146a91ef7026bb.jpg",
    title: "Elegant Villa",
    description:
      "A beautiful villa with breathtaking sunset views and a private pool.",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/f1/73/0b/f1730ba0520e30d182cb2f689c8b53a4.jpg",
    title: "Elegant Villa",
    description:
      "A beautiful villa with breathtaking sunset views and a private pool.",
  },
];

const Apparments = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="w-full p-5 bg-gray-100 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-5">
          Private Rooms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {images.map((house) => (
            <div key={house.id} className="relative group">
              {/* Image */}
              <img
                className="h-60 w-full object-cover rounded-lg shadow-lg"
                src={house.src}
                alt={house.title}
              />

              {/* ✅ Hidden Content (Appears on Hover) */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h3 className="text-lg font-semibold">{house.title}</h3>
                <p className="text-sm mt-2 px-4 text-center">
                  {house.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apparments;
