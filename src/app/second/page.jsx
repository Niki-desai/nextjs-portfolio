"use client";

import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const nextPage = () => {
    router.push("/third");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden ">
      <div className="flex flex-col items-center">
        <img
          src="https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_640.jpg"
          alt="flower"
          className="w-4/5 h-3/5 border-double border-4 border-indigo-600 "
        />
        <div className="mt-10 text-4xl font-bold text-center animate-bounce text-pink-600">
          <p>Want to re-enact the Titanic?</p>
        </div>
      </div>
      <svg
        className="animate-bounce w-12 h-12 text-lime-500" // Doubled size to w-12 and h-12
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 48 48" // Doubled the viewBox dimensions
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4} // Doubled the stroke width
          d="M36 28l-12 12m0 0L12 28m12 12V12"
        />
      </svg>
      <img
        src="https://t4.ftcdn.net/jpg/02/50/50/27/360_F_250502749_AC4ttnLsKQuHt7uOdqGxaMg1wLtizOrz.jpg"
        alt="flower"
        className="w-1/5 h-1/5 cursor-pointer"
        onClick={nextPage}
      />
    </div>
  );
};

export default page;
