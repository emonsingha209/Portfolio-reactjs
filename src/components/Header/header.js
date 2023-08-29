import React from "react";
import NavBar from "../NavBar/navbar";
import NavControl from "../NavBar/navToggle";
import scrollToSection from "../Scroll/scrollFunction";
import logo from "../../assets/images/Others/emonsinghalogo.webp";

function Header() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 flex justify-between w-auto h-16 text-white bg-gray-950">
        <div className="flex items-center justify-center ml-4 text-2xl cursor-pointer md:ml-6">
          <a
            href="#intro"
            onClick={(event) => scrollToSection(event, "intro")}
            className="flex items-center gap-2"
          >
            <img
              className="rounded-full w-7 md:w-8 h-7 md:h-8"
              src={logo}
              alt="logo"
            />
            <span className="font-extrabold text-blue-500">EMON</span>
            <span className="font-extrabold text-yellow-500">SINGHA</span>
          </a>
        </div>
        <div className="hidden md:flex">
          <NavBar />
        </div>
        <div className="flex items-center mr-2 md:hidden justify">
          <NavControl />
        </div>
      </div>
    </div>
  );
}

export default Header;
