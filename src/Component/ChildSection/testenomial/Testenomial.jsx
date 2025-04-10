const images = [
  {
    id: 1,
    src: "https://media.architecturaldigest.com/photos/5e729167f171de0008f09f4c/master/w_1600%2Cc_limit/WearstlerMasterClass.png",
    name: "Kelly Wearstler",
    position: "Interior Designer",
    rating: 5,
    description:
      "Kelly's visionary approach to interior design has completely transformed our living space into a masterpiece.",
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYf5P28kJbppaaZfkM65JyDkEfdzQiWMyzdGbti-3YzFm_qG98",
    name: "Philippe Starck",
    position: "Interior Designer",
    rating: 4,
    description:
      "Philippe brings a modern and unique aesthetic to every project. Highly recommend for contemporary designs!",
  },
  {
    id: 3,
    src: "https://images.squarespace-cdn.com/content/v1/55d113afe4b05658d74b6fe3/1506138671507-N5JF5Z7X9E5TKBG22E5D/Chikae+edit+O.H.+Sinclair+%26+Moore+Day+2_low+res-42.jpg?format=1500w",
    name: "Tanya Gyani",
    position: "Real Estate Developer",
    rating: 5,
    description:
      "Tanya is an expert in creating luxurious living spaces. Every project she works on is simply stunning!",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLG1XkHykBa--RlQTNnYFIL2G1Hnc2SIIXOw&s",
    name: "Vikas Oberoi",
    position: "Luxury Property Owner",
    rating: 4,
    description:
      "Vikas understands the true meaning of luxury living. His properties redefine elegance and comfort.",
  },
];

const Testimonial = () => {
  return (
    <div className="relative px-5 py-10 mt-8 mb-5 pb-5">
      <div className="container mx-auto w-full">
        {/* Heading Section */}
        <div className="w-full text-center">
          <div className="w-fit mx-auto border-t-2 border-l-2 border-r-2 rounded-3xl p-3 relative">
            <p className="text-sm absolute -top-3 left-1/2 -translate-x-1/2 w-fit bg-white px-2">
              Testimonials
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
              What Our Clients Say
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full text-center my-10 px-5">
          <p className="text-lg text-gray-700">
            See what our customers are saying about our luxury properties and
            architectural excellence.
          </p>
        </div>

        {/* ✅ Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 py-8">
          {images.map((profile) => (
            <div
              key={profile.id}
              className="flex flex-col items-start p-6 border border-gray-200 rounded-md shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Image & Info Section */}
              <div className="w-full flex items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-4">
                  <img
                    className="w-16 h-16 object-cover rounded-full shadow-lg"
                    src={profile.src}
                    alt={profile.name}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{profile.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {profile.position}
                    </p>
                  </div>
                </div>
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-xl ${
                        index < profile.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } transition duration-300`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-left mt-4 px-2 leading-relaxed">
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
