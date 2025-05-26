import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-8">
      <p className="text-yellow-600 mb-2">---{subHeading}---</p>
      <h3 className="text-4xl uppercase font-semibold border-y-4 border-gray-300 py-2">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
