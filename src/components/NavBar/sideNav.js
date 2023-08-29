import React from "react";
import scrollToSection from "../Scroll/scrollFunction";
import { CV } from "../../assets/data/cv";

function sideNav() {
  const liClass = "w-44 h-14 hover:text-yellow-400";

  return (
    <div>
      <nav>
        <ul className="absolute right-0 flex flex-col h-screen font-serif text-2xl font-thin text-center bg-gray-800 divide-y cursor-pointer top-16 divide-sky-400">
          <li className={liClass}>
            <a
              href="#intro"
              onClick={(event) => scrollToSection(event, "intro")}
              className="flex items-center justify-center w-full h-full"
            >
              Home
            </a>
          </li>
          <li className={liClass}>
            <a
              href="#about"
              onClick={(event) => scrollToSection(event, "about")}
              className="flex items-center justify-center w-full h-full"
            >
              About
            </a>
          </li>
          <li className={liClass}>
            <a
              href="#projects"
              onClick={(event) => scrollToSection(event, "projects")}
              className="flex items-center justify-center w-full h-full"
            >
              Projects
            </a>
          </li>
          <li className={liClass}>
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full h-full"
            >
              Resume
            </a>
          </li>
          <li className={liClass}>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact")}
              className="flex items-center justify-center w-full h-full"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default sideNav;
