import React, { useState } from "react";
import "./../../custom-styles.css";
import Astro from "./../../../public/images/Astro.svg";
import Image from "next/image";

const Home = () => {
  const [hovered, setHovered] = useState("");

  const handleHover = (e) => {
    setHovered(e);
  };
  return (
    <>
      {/* <div className="h-somescreen flex items-center justify-center bg-fuchsia-200 mt-12"> */}
      <div>
        <div class="grid grid-cols-6 gap-4 h-full w-full   rounded-lg shadow-md p-4">
          <div class="col-span-3">
            <div className="text-xs mb-3.5 sm:mb-4 lg:mb-7">WEB DEVELOPER</div>
            <div className="">
              <p className="text-base">Welcome, I'm</p>
              <p className="text-5xl">Nikita Desai, </p>
              <p className="text-base">
                crafting resonant digital experiences.
              </p>
            </div>
            <div className="text-sm mt-2">
              Crafting my unique path of growth, I navigate professional
              landscapes, leveraging skills in Web Development to drive
              impactful innovation
            </div>
            <div className="flex flex-row justify-start my-5 mx-5">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 flex flex-row mx-5">
                Contact me
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  // className="text-white"
                >
                  <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                </svg> */}
              </button>

              <a href="images/Resume.pdf" download="Resume.pdf">
                <button className="px-4 py-2 bg-slate-950 text-white rounded-full hover:bg-slate-500 focus:outline-none focus:ring focus:bg-slate-400 flex flex-row mx-5">
                  Download CV
                  {/* <div className="bg-white mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                  </svg>
                </div> */}
                </button>
              </a>
            </div>
            <div className="flex flex-row space-x-5 justify-around">
              <div
                className="flex flex-row space-x-5"
                onMouseEnter={() => handleHover("LinkedIn")}
                onMouseLeave={() => handleHover("")}
              >
                <img
                  className="cursor-pointer"
                  width={20}
                  src={
                    hovered === "LinkedIn"
                      ? "/images/linkedin.svg"
                      : "/images/linkedin-in.svg"
                  }
                  alt={hovered === "LinkedIn" ? "Second Image" : "First Image"}
                />
              </div>
              <div
                className="flex flex-row space-x-5"
                onMouseEnter={() => handleHover("GitHub")}
                onMouseLeave={() => handleHover("")}
              >
                <img
                  className="cursor-pointer"
                  width={20}
                  src={
                    hovered === "GitHub"
                      ? "/images/square-github.svg"
                      : "/images/github.svg"
                  }
                  alt={hovered === "GitHub" ? "Second Image" : "First Image"}
                />
              </div>
              <div
                className="flex flex-row space-x-5"
                onMouseEnter={() => handleHover("Instagram")}
                onMouseLeave={() => handleHover("")}
              >
                <img
                  className="cursor-pointer"
                  width={20}
                  src={
                    hovered === "Instagram"
                      ? "/images/square-instagram.svg"
                      : "/images/instagram.svg"
                  }
                  alt={hovered === "Instagram" ? "Second Image" : "First Image"}
                />
                {/* Additional icons */}
              </div>
            </div>
          </div>
          <div class=" col-span-1">
            <div></div>
          </div>
          <div class=" col-span-2">
            <Image
              src="/images/Coder.png"
              alt="CoderImage"
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
