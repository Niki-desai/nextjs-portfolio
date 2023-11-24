"use client";

import { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./nav.css";
import { useParams, useRouter } from "next/navigation";

function Navbar() {
  const navRef = useRef();
  const router = useRouter();
  const { id } = useParams();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/projects">My Projects</a>
        {/* <a href="/contact">Contact</a> */}
        {/* <a href="/#">About me</a> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
