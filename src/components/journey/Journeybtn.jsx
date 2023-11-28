"use client";

import React from "react";
import cloud from "./../../../public/images/cloud.png";
import { useRouter } from "next/navigation";

const Journeybtn = () => {
  const router = useRouter();
  return (
    <>
      {/* <div className="h-somescreen flex items-center justify-center bg-fuchsia-200 mt-12"> */}
      <div>
        <div class="grid grid-cols-6 gap-4 h-full w-full   rounded-lg shadow-md p-4">
          <div class="col-span-3 place-content-center ">
            <h1> Embark on this journey with me...</h1>
            <div
              className="cursor-pointer"
              onClick={() => router.push("/projects")}
            >
              CLICK ME!!!
            </div>
          </div>
          {/* <div class=" col-span-1">
            <div></div>
          </div> */}
          <div class=" col-span-3">
            {/* <Image
              src="/images/Coder.png"
              alt="CoderImage"
              width={500}
              height={500}
              className=""
            /> */}
            <div class="animate-bounce">
              <img
                src="/images/hero-image.png"
                className="w-96 h-96 cursor-pointer"
                alt="Example Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//animated button- onclick - my work - and contact nav

export default Journeybtn;
