import React from 'react';
import Skill from '../SkillLogo/skill';
import html from '../../images/html-5.png';
import css from '../../images/css-3.png';
import js from '../../images/js.png';
import php from '../../images/php.png';
import react from '../../images/react.png';
import ts from '../../images/typescript.png';
import tailwind from '../../images/Tailwind_CSS.png';
import nextjs from '../../images/nextjs.png';
import nestjs from '../../images/nestjs.png';

function About() {
  return (
    <div id='about' className='flex flex-col lg:flex-row md:pt-16 h-full'>
      <div className='flex flex-col items-center justify-center text-xl md:text-2xl gap-4 p-4 lg:w-2/3'>
        <div className='text-3xl md:text-5xl font-bold'>
          <h1 className='text-yellow-400'>ABOUT ME</h1>
        </div>
        <div className='text-center md:text-justify md:tracking-normal leading-relaxed font-poppins px-0 md:px-8'>
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
      <div className='flex items-center lg:w-1/3 h-full'>
        <div className='grid grid-cols-3 text-center text-base md:text-2xl font-bold text-yellow-500 m-4 mt-0 lg:m-2 lg:w-full h-fit'>
          <div>
            <Skill skill='HTML' logo={html} />
          </div>
          <div>
            <Skill skill='CSS' logo={css} />
          </div>
          <div>
            <Skill skill='PHP' logo={php} />
          </div>
          <div>
            <Skill skill='JavaScript' logo={js} />
          </div>
          <div>
            <Skill skill='TypeScript' logo={ts} />
          </div>
          <div>
            <Skill skill='Tailwind CSS' logo={tailwind} />
          </div>
          <div>
            <Skill skill='ReactJS' logo={react} />
          </div>
          <div>
            <Skill skill='NextJS' logo={nextjs} />
          </div>
          <div>
            <Skill skill='NestJS' logo={nestjs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
