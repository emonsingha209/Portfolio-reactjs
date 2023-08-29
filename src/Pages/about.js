import React from "react";
import { skillsData } from "../assets/data/skill";

function About() {
  return (
    <div id="about" className="flex flex-col h-full pt-4 xl:flex-row md:pt-16">
      <div className="flex flex-col items-center justify-center gap-4 p-4 text-xl md:text-2xl xl:w-2/3">
        <div className="text-3xl font-bold md:text-5xl">
          <h1 className="text-yellow-400">ABOUT ME</h1>
        </div>
        <div className="px-0 font-light leading-relaxed text-left md:text-justify md:tracking-normal md:px-8">
          <p>
            Hi, I'm Emon Singha, a web developer with expertise in HTML, CSS,
            JavaScript, and PHP. Additionally, I'm proficient in frameworks such
            as ReactJS, NextJs, and NestJs, which enable me to build dynamic and
            scalable web applications. I'm also experienced in using Tailwind
            CSS, a utility-first CSS framework, to create responsive and stylish
            web interfaces efficiently. I'm passionate about web development and
            eager to collaborate on new projects. Thank you for visiting my
            portfolio website!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full xl:w-1/3 md:mr-4">
        <div className="flex items-center mt-8 text-3xl font-bold text-white md:text-4xl">
          <h2>MY STACKS</h2>
        </div>
        <div className="grid grid-cols-3 m-4 mt-0 text-base font-bold text-center text-yellow-500 md:grid-cols-6 xl:grid-cols-4 md:text-xl lg:m-2 lg:w-full h-fit">
          {skillsData.map((skill, index) => (
            <div key={index}>
              <div>
                <div className="flex items-center justify-center p-8 pb-3 md:p-6 md:pb-2">
                  <img
                    src={skill.logo}
                    alt={skill.skill}
                    width={150}
                    height={150}
                    loading="lazy"
                    className="w-16 h-auto"
                  />
                </div>
                <div className="mb-4">
                  <p>{skill.skill}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
