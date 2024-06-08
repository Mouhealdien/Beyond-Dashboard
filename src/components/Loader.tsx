import React from "react";

const Loader = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div id="load">
      <div className="inline">
        <svg
          className="inline ml-0 pl-0 mt-[23px] md:mt-[27px]    w-[10px] h-[14px] md:w-[15px] md:h-[20px] "
          width="15"
          height="20"
          viewBox="0 0 23 22"
          fill="#1479FF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3813 -1.87188e-05L0.5 10.6636L11.3812 21.3272L22.2625 10.6636L11.3813 -1.87188e-05Z"
            fill="#1479FF"
          />
        </svg>
      </div>
      <div>D</div>
      <div>N</div>
      <div>O</div>
      <div>Y</div>
      <div>E</div>
      <div>B</div>
    </div>
  );
};

export default Loader;
