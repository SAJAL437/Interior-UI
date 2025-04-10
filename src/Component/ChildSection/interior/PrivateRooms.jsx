const images = [
  {
    id: 1,
    src: "https://images8.alphacoders.com/595/595107.jpg",
    title: "Luxury Private House",
    description:
      "A stunning modern house with elegant interiors and breathtaking views.",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Modern Mansion",
    description:
      "A spacious and luxurious mansion with top-notch architecture.",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Elegant Villa",
    description:
      "A beautiful villa with breathtaking sunset views and a private pool.",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Elegant Villa",
    description:
      "A beautiful villa with breathtaking sunset views and a private pool.",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Elegant Villa",
    description:
      "A beautiful villa with breathtaking sunset views and a private pool.",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Elegant Villa",
    description:
      "A beautiful villa with breathtaking sunset views and a private pool.",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
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
