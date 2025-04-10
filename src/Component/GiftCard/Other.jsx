import React from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SliderCard from "./Giftslider.jsx/SliderCard";

const ideas = [
  {
    id: 1,
    icon: <DynamicFeedIcon fontSize="large" className="text-indigo-600" />,
    title: "Instant Delivery",
    description:
      "Click 'Purchase Now' and choose the package amount on the next page. We'll take care of the rest and send the gift card instantly.",
  },
  {
    id: 2,
    icon: <CardGiftcardIcon fontSize="large" className="text-pink-500" />,
    title: "Already Have a Gift Card",
    description:
      "Email help@easyandfeast.com to redeem your voucher or get started by clicking on the link sent to your email. We can't wait to help design your dream space",
  },
  {
    id: 3,
    icon: <HandshakeIcon fontSize="large" className="text-yellow-600" />,
    title: "Gift Cards For Business",
    description:
      "Partner with us for business gift needs - from employee incentives and apprecation to client gifts. Our packeges range from single rooms to full home and office design",
  },
];

const Other = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-screen-md">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 pb-4">
            Be a part of the home interiors revolution
          </h1>
        </div>
        <div className="text-start w-full max-w-screen-xl mb-12 px-4 py-5">
          <p  className="text-gray-600 ">
            Award-winning interior designers, exceptional design and service
            partners and quality materials, all united under one platform.
            Livspace has been on a passionate mission since 2014 to
            revolutionise the home interiors industry – transforming spaces into
            happy homes! Our unwavering commitment to excellence has earned us
            the title of India's most trusted* home interiors and renovation
            platform.

          </p>
          <p className="text-gray-600 mt-2">
            We believe in the power of design and service and are looking for
            like minded entrepreneurs to collaborate with. Interested in making
            a difference? Become our franchise partner and play an integral part
            in shaping the future of living while creating beautiful spaces that
            inspire.
          </p>
        </div>
      </div>

      <div className="flex bg-oth bg-cover bg-bottom justify-center flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl px-2">
          {ideas.map((item) => (
            <div
              key={item.id}
              className="p-6 cursor-pointer hover:translate-y-1.5 transition-all duration-500 rounded-2xl text-center shadow-md  hover:shadow-xl  bg-black/40  ease-in-out"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h2 className="text-lg font-semibold text-gray-200 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-100 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center w-full max-w-screen-md">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 pb-4">
            Give the Gift of Great Design
          </h1>
        </div>
        <button className="border border-gray-800 text-gray-800 rounded-full px-6 sm:px-10 py-2 text-sm sm:text-base lg:text-lg font-medium transition-all duration-500 ease-in-out hover:bg-gray-800 hover:text-white">
          PURCHASE NOW
        </button>
      </div>
    </div>
  );
};

export default Other;
