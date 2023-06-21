import React from 'react';
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
    <div
      id='about'
      className='flex flex-col lg:flex-row gap-0 mx-0 md:mx-4 md:pt-16 lg:pb-4 h-full'
    >
      <div className='flex flex-col items-center justify-center text-xl md:text-2xl gap-4 p-4 mt-4 lg:w-2/3'>
        <div className='text-3xl md:text-5xl font-bold'>
          <h1 className='text-yellow-500'>ABOUT ME</h1>
        </div>
        <div className='text-center font-poppins'>
          <p>
            Hi, I'm Emon Singha, a web developer with expertise in HTML, CSS,
            JavaScript,and PHP. Additionally, I'm proficient in
            frameworks such as ReactJS, NextJs, and NestJs, which enable me to
            build dynamic and scalable web applications. I'm also experienced in
            using Tailwind CSS, a utility-first CSS framework, to create
            responsive and stylish web interfaces efficiently. I'm passionate
            about web development and eager to collaborate on new projects.
            Thank you for visiting my portfolio website!
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 text-center text-2xl font-bold text-yellow-500 m-4 lg:m-2 lg:w-1/3 h-full'>
        <div>
          <div className='p-8 pb-4'>
            <img src={html} alt='html' />
          </div>
          <div>
            <p>HTML</p>
          </div>
        </div>
        <div>
          <div className='p-8 pb-4'>
            <img src={css} alt='css' />
          </div>
          <div>
            <p>CSS</p>
          </div>
        </div>
        <div>
          <div className='p-8 pb-4'>
            <img src={php} alt='php' />
          </div>
          <div>
            <p>PHP</p>
          </div>
        </div>
        <div>
          <div className='p-8 pb-4'>
            <img src={js} alt='javascript' />
          </div>
          <div>
            <p>JavaScript</p>
          </div>
        </div>
        <div>
          <div className='p-8 pb-4'>
            <img src={ts} alt='typescript' />
          </div>
          <div>
            <p>TypeScript</p>
          </div>
        </div>
        <div>
          <div className='p-8 pb-4'>
            <img src={tailwind} alt='tailwind css' />
          </div>
          <div>
            <p>Tailwind CSS</p>
          </div>
        </div>
        <div>
          <div className='p-8 pb-4'>
            <img src={react} alt='reactjs' />
          </div>
          <div>
            <p>ReactJS</p>
          </div>
        </div>
        <div>
          <div className='p-8 pb-4'>
            <img
              className='bg-white rounded-full p-4'
              src={nextjs}
              alt='nextjs'
            />
          </div>
          <div>
            <p>NextJs</p>
          </div>
        </div>
        <div>
          <div className='p-8 pb-4'>
            <img className='p-4' src={nestjs} alt='nestjs' />
          </div>
          <div>
            <p>NestJs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
