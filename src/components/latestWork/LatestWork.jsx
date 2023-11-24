import React from "react";
import "./../../custom-styles.css";
import Astro from "./../../../public/images/Astro.svg";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LatestWork = () => {
  return (
    <>
      <div className="h-somescreen flex items-center justify-center bg-fuchsia-200 mt-12">
        <div class="grid grid-cols-6 gap-4 h-full w-full   rounded-lg shadow-md p-4">
          <div class="col-span-3  flex flex-col items-center my-5">
            <h1>Latest Projects</h1>
            <div>Go through my latest work ...</div>
            <button className="px-4 py-2 bg-slate-950 text-white rounded-full hover:bg-slate-500 focus:outline-none focus:ring focus:bg-slate-400 flex flex-row mx-5 my-5">
              All Projects
            </button>
          </div>
          {/* <div class="bg-green-200 col-span-1">
            2<div></div>
          </div> */}
          <div class=" col-span-3">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 1,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              // showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <img
                className="cursor-pointer"
                src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
              <img
                className="cursor-pointer"
                src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
              <img
                className="cursor-pointer"
                src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
              <img
                className="cursor-pointer"
                src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
              <img
                className="cursor-pointer"
                src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                style={{
                  display: "block",
                  height: "100%",
                  margin: "auto",
                  width: "100%",
                }}
              />
            </Carousel>

            {/* <Image
              src={Astro}
              alt="Astro Image"
              width={500}
              height={500}
              className="pt-48"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestWork;
