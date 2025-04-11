import React from "react";
import Magazine from "../../Component/Magazine/ParentPage/Magazine";
import Faqs from "../../Component/More/Faqs/Faqs";

const MagzinePage = () => {
  return (
    <div>
      <div className="mx-auto sm:p-2">
        <Magazine />
        <div className="container-fluid mx-auto w-[100%] bg-gray-100 mt-9">
          <Faqs />
        </div>
      </div>
    </div>
  );
};

export default MagzinePage;
