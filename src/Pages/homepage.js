import React from "react";
import Intro from "./intro";
import About from "./about";
import Project from "./project";
import Contact from "./contact";

function HomePage() {
  return (
    <div className="text-white bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="h-auto xl:h-screen">
        <Intro />
      </div>
      <div className="h-auto xl:h-screen">
        <About />
      </div>
      <div className="h-auto">
        <Project />
      </div>
      <div className="h-auto">
        <Contact />
      </div>
    </div>
  );
}
export default HomePage;
