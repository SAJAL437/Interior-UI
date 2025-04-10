import React from "react";
import Navbar from "../../navbar/Navbar";
import StoryCard from "./SliderBlog/Story/StoryCard";
import Design from "./Design/Design";
import { LuAmpersand } from "react-icons/lu";
import Slide from "./SliderBlog/Slide";
import { story } from "./SliderBlog/Story/Story";
import Link from "../Rooms/Link";

export const EXPLORE = [
  {
    id: 1,
    title: "Modern Living Room",
    images:
      "https://cdn.pixabay.com/photo/2023/12/30/07/31/living-room-8477523_1280.jpg",
    description:
      "Step into a modern living room that blends clean lines, neutral tones, and sleek furniture to create a space that's both stylish and functional. Perfect for relaxing or entertaining, this interior design brings harmony through minimalism and thoughtful decor elements. Natural light and layered textures add warmth and sophistication to your everyday living space.",
  },
  {
    id: 2,
    title: "Cozy Bedroom",
    images:
      "https://cdn.pixabay.com/photo/2020/09/03/10/55/bedroom-5540896_1280.jpg",
    description:
      "Unwind in a cozy bedroom that radiates comfort and calm. Featuring soft lighting, plush textiles, and a warm color palette, this space is designed to be your serene escape from the world. The layered bedding and thoughtful decor bring a sense of tranquility, making it ideal for restful nights and peaceful mornings.",
  },
  {
    id: 3,
    title: "Elegant Living Space",
    images:
      "https://cdn.pixabay.com/photo/2020/09/14/09/38/living-room-5570465_1280.jpg",
    description:
      "Experience the beauty of elegance in this refined living space where classic design meets modern luxury. The spacious layout is complemented by rich textures, ambient lighting, and curated furnishings that exude timeless charm. It's the perfect setting for sophisticated gatherings or quiet moments of reflection, elevating everyday living to an art form.",
  },
];

const Magazine = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-96 bg-imgmag bg-cover bg-center sm:rounded-3xl shadow-lg shadow-gray-600 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full p-5 bg-black/30 sm:rounded-3xl flex items-center justify-center">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-white text-5xl sm:text-7xl font-bold mt-5">
              Blogs
            </h1>
            <p className="text-white text-base sm:text-lg mt-3">
              Everything you wanted to know about getting your interiors is
              right here.
            </p>
            <p className="text-white text-base sm:text-lg">
              Discover the latest home tours, decor ideas, interior design
              guides, industry insights, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-fluid mx-auto h-auto mt-5 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10">
          {/* Editor's Picks */}
          <div className="md:col-span-7 w-full h-auto p-4">
            <h1 className="text-gray-700 text-3xl sm:text-4xl font-bold mb-3">
              Editor's Picks
            </h1>

            {/* <div className="h-auto mt-5 p-4 rounded-xl bg-gray-100 shadow-lg">
              <div className="flex flex-col gap-6">
                <div className="w-full">
                  <img
                    src="https://i.ytimg.com/vi/rHymR_fQOFE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC07RuF6m83Yt5HdD1AWoZ1g7k2uQ"
                    alt="Editor’s Pick"
                    className="w-full h-64 sm:h-[25rem] object-cover rounded-lg shadow-md"
                  />
                </div>

                <div className="w-full text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci laboriosam laborum asperiores dolores sint amet,
                    earum quos voluptates dignissimos magni, vero reiciendis
                    eligendi vitae alias voluptate quisquam esse suscipit
                    dolorem.
                  </p>
                </div>
              </div>
            </div> */}
            <Slide />
          </div>

          {/* Recent Stories */}
          <div className="md:col-span-5 w-full h-auto p-4">
            <h1 className="text-gray-700 text-3xl sm:text-4xl font-bold mb-3">
              Recent Stories
            </h1>

            <div className="p-2 rounded-xl bg-gray-100 shadow-lg">
              <div className="overflow-y-auto scroll-smooth max-h-[60vh] sm:max-h-[75vh] mt-2 p-2 rounded-xl scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 pb-4">
                {story.map((item) => (
                  <StoryCard
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interior Grid Section */}
      <div className="flex flex-col justify-start items-center py-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pb-6 text-start w-full max-w-screen-2xl">
          <a
            href="#"
            className="flex text-3xl sm:text-4xl font-bold items-center gap-2"
          >
            <span>Earnest</span>
            <span className="flex items-center">
              <LuAmpersand className="mt-1" /> Feast Homes
            </span>
          </a>
          <p className="text-lg text-gray-500 mt-1">
            Explore a range of home interiors in different styles, budgets and
            sizes
          </p>
        </div>

        {/* Grid of Explore Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-2xl">
          {EXPLORE.map((item, i) => (
            <div
              key={item.id + "-" + i}
              className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <img
                src={item.images}
                alt={item.title}
                className="rounded-lg w-full h-[32rem] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              {/* Overlay Content */}
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white transition-opacity duration-500 ease-in-out">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-200 py-5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex justify-center flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-screen-md">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 pb-4">
            Your dream home is just a click away
          </h1>
        </div>
        <button className="border border-gray-800 text-gray-800 rounded-full px-6 sm:px-10 py-2 text-sm sm:text-base lg:text-lg font-medium transition-all duration-500 ease-in-out hover:bg-gray-800 hover:text-white">
          LET'S GET STARTED
        </button>
      </div>

      <Design />

      <Link />
    </div>
  );
};

export default Magazine;
