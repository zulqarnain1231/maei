import React from "react";

const Divider = () => {
  return (
    <div className="w-full flex flex-shrink-0 items-center justify-start">
      <span className="h-[6px] w-[6px] rounded-full bg-gray-main/50"></span>
      <span className="w-full h-[1px] bg-gray-main/50"></span>
      <span className="h-[6px] w-[6px] rounded-full bg-gray-main/50"></span>
    </div>
  );
};

export default Divider;
