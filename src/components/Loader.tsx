import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Loader = () => {
  return (
    <div
      dir="ltr"
      className="loading  bg-transparent space-x-1 z-50 text-[1rem] sm:text-[6rem]  text-primary loading01"
    >
      <span>B</span>
      <span>E</span>
      <span>Y</span>
      <span>O</span>
      <span>N</span>
      <span>D</span>
      <span className="inline">
        <svg
          className="inline ml-0 pl-0 mt-[23px] md:mt-[27px]    w-[15px] h-[14px] md:w-[16px] md:h-[20px] "
          width="15"
          height="20"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3813 -1.87188e-05L0.5 10.6636L11.3812 21.3272L22.2625 10.6636L11.3813 -1.87188e-05Z"
            fill="#1479FF"
          />
        </svg>
      </span>
    </div>
  );
};

export default Loader;
