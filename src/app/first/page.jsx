"use client";

import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const nextPage = () => {
    router.push("/second");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen space-y-24">
        <div className="font-bold text-5xl">
          <h1>Hi Wasim !!!</h1>
        </div>
        <div className="text-fuchsia-600 font-bold text-2xl">
          Love You.... To 🌚 And 🏃‍♀️ Back
        </div>
        {/* <div>Hi Wasim</div>
         */}
        <button
          className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextPage}
        >
          Click Here !!
        </button>
      </div>
    </>
  );
};

export default page;
