import React from "react";
import cloud from "./../../../public/images/cloud.png";

const Journeybtn = () => {
  return (
    <>
      <div>Journeybtn</div>

      <svg
        class="animate-bounce w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image
          href={cloud}
          //   width="24"
          //   height="24"
          className="w-3/5 h-2/5"
        />
        <text x="12" y="18" text-anchor="middle" font-size="6" fill="black">
          {/* Join me On my Journey */}
        </text>
      </svg>
    </>
  );
};

//animated button- onclick - my work - and contact nav

export default Journeybtn;
