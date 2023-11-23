"use client";

import { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./../navbar/nav.css";
import { useParams, useRouter } from "next/navigation";
import Home from "./../home/Home";
import About from "./../about/About";
import LatestWork from "./../latestWork/LatestWork";
import MyServices from "./../myServices/MyServices";
import Journeybtn from "./../journey/Journeybtn";

function Navbar() {
  const navRef = useRef();
  const router = useRouter();
  const { id } = useParams();
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const myWorkRef = useRef(null);
  const myServicesRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    if (navRef.current.classList.contains("responsive_nav")) {
      navRef.current.classList.remove("responsive_nav");
    }
  };

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-fuchsia-100">
        <header className="">
          <h3>LOGO</h3>
          <nav ref={navRef}>
            <a
              href="#home"
              onClick={() => {
                scrollToRef(homeRef), closeNavbar();
              }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => {
                scrollToRef(aboutMeRef), closeNavbar();
              }}
            >
              About Me
            </a>
            <a
              href="#work"
              onClick={() => {
                scrollToRef(myWorkRef), closeNavbar();
              }}
            >
              Latest Projects
            </a>
            <a
              href="#services"
              onClick={() => {
                scrollToRef(myServicesRef), closeNavbar();
              }}
            >
              My Services
            </a>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>

        <div className="">
          <section ref={homeRef} id="home">
            {/* Home section content */}
            {/* <h1>Home</h1> */}
            <Home />
          </section>
          <section ref={aboutMeRef} id="about">
            {/* My Work section content */}
            <About />
          </section>
          <section ref={myWorkRef} id="work">
            {/* About Me section content */}
            <h1>Latest Projects</h1>
            <LatestWork></LatestWork>
          </section>
          <section ref={myServicesRef} id="services">
            {/* About Me section content */}
            <h1>My Services</h1>
            <MyServices />
          </section>
          <Journeybtn />
        </div>
      </div>
    </>
  );
}

export default Navbar;
