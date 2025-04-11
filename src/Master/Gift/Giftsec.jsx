import React from "react";
import Giftsection from "../../Component/GiftCard/Giftsection";
import Ideas from "../../Component/GiftCard/Ideas";
import Other from "../../Component/GiftCard/Other";
import Faqs from "../../Component/More/Faqs/Faqs";
const Giftsec = () => {
  return (
    <div>
      <div className="mx-auto sm:p-2">
        <Giftsection />
        <Ideas />
        <Other />
        <div className="container-fluid mx-auto w-[100%] bg-gray-100 mt-9">
          <Faqs />
        </div>
      </div>
    </div>
  );
};

export default Giftsec;
