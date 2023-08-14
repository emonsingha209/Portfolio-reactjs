import React from 'react';
import { skillsData } from '../assets/data/skill';

function About() {
  return (
    <div id='about' className='flex flex-col lg:flex-row pt-4 md:pt-16 h-full'>
      <div className='flex flex-col items-center justify-center text-xl md:text-2xl gap-4 p-4 lg:w-2/3'>
        <div className='text-3xl md:text-5xl font-bold'>
          <h1 className='text-yellow-400'>ABOUT ME</h1>
        </div>
        <div className='text-left md:text-justify md:tracking-normal leading-relaxed font-light px-0 md:px-8'>
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
      <div className='flex flex-col items-center lg:w-1/3 h-full md:mr-4'>
        <div className='flex items-center mt-8 text-white text-3xl md:text-4xl font-bold'>
          <h2>MY STACKS</h2>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-4 text-center text-base md:text-xl font-bold text-yellow-500 m-4 mt-0 lg:m-2 lg:w-full h-fit'>
          {skillsData.map((skill, index) => (
            <div key={index}>
              <div>
                <div className='p-8 md:p-6 pb-3 md:pb-2'>
                  <img
                    src={skill.logo}
                    alt={skill.skill}
                    loading='lazy'
                    className='w-16 h-auto'
                  />
                </div>
                <div className='mb-4'>
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
