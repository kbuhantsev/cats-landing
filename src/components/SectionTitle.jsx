import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      <h2 className="w-full text-center text-3xl font-bold text-textColor">
        {title}
      </h2>
      <span
        className="text-3xl font-bold text-textColor 
           after:m-auto after:block after:h-1 after:w-1/2 after:bg-red-500"
      ></span>
    </>
  );
};

export default SectionTitle;
