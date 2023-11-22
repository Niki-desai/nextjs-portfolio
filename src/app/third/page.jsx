"use client";

import React from "react";
import { useState, useEffect } from "react";
import Photo from "./../../../public/photo.jpg";
import Image from "next/image";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      //   router.push("/destination-page"); // Redirect to your destination page
    }, 3000); // Set the loading duration to 4 seconds (4000 milliseconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full border-4 border-t-4 border-gray-200 h-52 w-52">
            {/* <Image src={Photo} width={1200} height={1200} /> */}
            <img
              src="https://thumbs.dreamstime.com/b/heart-roses-valentines-day-made-red-isolated-white-background-36600776.jpg"
              alt="heart"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen overflow-hidden ">
          <div className="flex flex-col items-center">
            <p className="my-10 text-4xl font-bold text-center  text-amber-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {/* <p>Want to re-enact the Titanic? </p> */}
              <p className="mt-10">You be the iceberg as I go down.</p>
            </p>
            <div className="-rotate-90">
              <Image src={Photo} width={300} height={200} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
