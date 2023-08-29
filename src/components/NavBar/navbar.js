import React from "react";
import scrollToSection from "../Scroll/scrollFunction";
import { CV } from "../../assets/data/cv";

function NavBar() {
  const liClass =
    "hover:text-yellow-400 h-full flex items-center justify-center";

  return (
    <div>
      <nav>
        <ul className="h-16 gap-4 mr-4 font-serif text-2xl font-thin md:flex">
          <li className={liClass}>
            <a
              href="#intro"
              onClick={(event) => scrollToSection(event, "intro")}
              className="flex items-center justify-center h-full xl:px-1"
            >
              Home
            </a>
          </li>
          <li className={liClass}>
            <a
              href="#about"
              onClick={(event) => scrollToSection(event, "about")}
              className="flex items-center justify-center h-full xl:px-1"
            >
              About
            </a>
          </li>
          <li className={liClass}>
            <a
              href="#projects"
              onClick={(event) => scrollToSection(event, "projects")}
              className="flex items-center justify-center h-full xl:px-1"
            >
              Projects
            </a>
          </li>
          <li className={liClass}>
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center h-full xl:px-1"
            >
              Resume
            </a>
          </li>
          <li className={liClass}>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact")}
              className="flex items-center justify-center h-full xl:px-1"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
