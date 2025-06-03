import React from "react";
import Navbar from "../../navbar/Navbar";

const About = () => {
  return (
    <div className="bg-black/20 backdrop-blur-2xl min-h-screen text-gray-200">
      <Navbar />

      {/* About Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-wide">
            About Us
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl font-medium text-gray-500">
            Passionately creating personalised designer homes since 2015
          </h2>
        </div>

        {/* Description + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-md sm:text-lg leading-relaxed text-gray-600">
            <p>
              <strong className="text-gray-300">Easy & Feast</strong> was
              founded by award-winning architects,{" "}
              <strong>Sajal Tiwari</strong> & <strong>Tanya Tripathi</strong>,
              who bring together more than two decades of national and
              international design experience.
            </p>
            <p>
              We’ve designed over{" "}
              <strong className="text-gray-800">10,000 homes</strong> across
              India. Our work has been featured in more than 30 global design
              publications — and the next one could be yours. 🙂
            </p>
            <p>
              As we expand across the country, Easy & Feast is becoming one of
              the most recognised and trusted brands in home interiors in India.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="https://img.freepik.com/free-photo/digital-art-style-illustration-graphic-designer_23-2151536940.jpg?t=st=1744374774~exp=1744378374~hmac=da70119f0c8982a21d0b73db6221a24e0701d97048e1687d214b36350220a99a&w=826"
              alt="Interior Designer Illustration"
              className="rounded-2xl shadow-lg max-w-full md:max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-20 bg-white text-yellow-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/144242261?u=42e575828cd602753a3737afc56c2a8a5a4bcbe8&v=4"
              alt="Sajal Tiwari"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-lg border-4 border-yellow-900"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Sajal Tiwari
            </h1>
            <p className="text-lg text-yellow-700 mb-4">Co-founder & CEO</p>
            <p className="text-md leading-relaxed text-yellow-800">
              A seasoned architect, Sajal has been part of the Indian designer
              ecosystem for the last 15 years. He is a graduate of the BMS
              School of Architecture, Bangalore and went on to get an MBA from
              Columbia Business School in New York.
              <br />
              <br />
              Sajal was part of over 500 design projects across sectors such as
              residential, hospitality, and retail before he co-founded
              DesignCafe in 2015. He was recently recognized as Entrepreneur
              Daily's ‘35 under 35’ Emerging Leaders.
              <br />
              <br />
              Sajal is driven to achieve design excellence and customer
              satisfaction in every project that the firm undertakes.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-20 bg-white text-yellow-900">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Leadership</h1>
          <p className="text-yellow-600 text-md sm:text-lg">
            Meet the minds behind our success and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              image:
                "https://media.designcafe.com/wp-content/uploads/2020/05/23144353/amar-krishnamurthy.jpg",
              name: "Amar Krishnamurthy",
              designation: "SVP - Operations & Factory",
            },
            {
              image:
                "https://images.livspace-cdn.com/w:200/h:200/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/about-us-1629737930-WrXkD/mobile-1629737947-8cnvs/founders-1629749026-4Dd76/anuj-mobile-1632298064-KVsoM.jpg",
              name: "Anuj Kumar",
              designation: "SVP - Product & Category",
            },
            {
              image:
                "https://media.designcafe.com/wp-content/uploads/2020/05/23144758/swati-santani.jpg",
              name: "Swati Santani",
              designation: "COO",
            },
            {
              image:
                "https://images.livspace-cdn.com/w:200/h:200/dpr:2/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/about-us-1629737930-WrXkD/mobile-1629737947-8cnvs/founders-1629749026-4Dd76/rk-mobile-1632298059-v71q6.jpg",
              name: "Ramesh Kumar",
              designation: "Finance Controller",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-yellow-900"
              />
              <p className="text-lg font-semibold text-yellow-800">
                {member.name}
              </p>
              <p className="text-sm text-yellow-600">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
