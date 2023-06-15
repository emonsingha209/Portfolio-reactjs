import React from 'react';
import html from '../images/html-5.png';
import css from '../images/css-3.png';
import js from '../images/js.png';
import php from '../images/php.png';
import react from '../images/react.png';
import ts from '../images/typescript.png';
import tailwind from '../images/Tailwind_CSS.png';
import nextjs from '../images/nextjs.png';
import nestjs from '../images/nestjs.png';

function About() {
  return (
    <div
      id='#about'
      className='flex flex-col lg:flex-row gap-0 mx-0 md:mx-4 md:pt-20 lg:pb-4 h-full'
    >
      <div className='flex flex-col items-center justify-center text-xl md:text-2xl gap-4 p-4 mt-4 lg:w-2/3'>
        <div className='text-3xl md:text-5xl font-bold'>
          <h1 className='text-yellow-500'>ABOUT ME</h1>
        </div>
        <div className='text-center font-poppins'>
          <p>
            Hi, I'm Emon Singha, a web developer with expertise in HTML, CSS,
            JavaScript, TypeScript, and PHP. Additionally, I'm proficient in
            frameworks such as ReactJS, NextJs, and NestJs, which enable me to
            build dynamic and scalable web applications. I'm also experienced in
            using Tailwind CSS, a utility-first CSS framework, to create
            responsive and stylish web interfaces efficiently. I'm passionate
            about web development and eager to collaborate on new projects.
            Thank you for visiting my portfolio website!
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 text-center text-2xl font-bold text-yellow-500 m-4 lg:m-0 lg:w-1/3 h-full'>
        <div>
          <img className='p-4' src={html} alt='html'/>
          <p>HTML</p>
        </div>
        <div>
          <img className='p-4' src={css} alt='css'/>
          <p>CSS</p>
        </div>
        <div>
          <img className='p-4' src={php} alt='php'/>
          <p>PHP</p>
        </div>
        <div>
          <img className='p-4' src={js} alt='js'/>
          <p>JavaScript</p>
        </div>
        <div>
          <img className='p-4' src={ts} alt='ts'/>
          <p>TypeScript</p>
        </div>
        <div>
          <img className='p-4' src={tailwind} alt='tailwind'/>
          <p>Tailwind CSS</p>
        </div>
        <div>
          <img className='p-4' src={react} alt='react'/>
          <p>ReactJS</p>
        </div>
        <div>
          <img className='p-4' src={nextjs} alt='nextjs'/>
          <p>NextJs</p>
        </div>
        <div>
          <img className='p-4' src={nestjs} alt='nestjs'/>
          <p>NestJs</p>
        </div>
      </div>
    </div>
  );
}

export default About;
