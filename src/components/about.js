import React from 'react';

function About() {
  return (
    <div
      id='#about'
      className='grid grid-cols-1 md:grid-cols-3 h-screen mx-0 md:mx-4 font-poppins'
    >
      <div className='flex flex-col col-span-2 items-center justify-center text-base md:text-2xl gap-4 p-4 mt-16'>
        <div className='text-2xl md:text-5xl font-bold'>
          <h1 className='text-yellow-500'>About me</h1>
        </div>
        <div>
          <p>
            Hi, I'm Emon Singha, a web developer with expertise in HTML, CSS,
            JavaScript, TypeScript, and PHP. I have extensive experience working with raw
            PHP, allowing me to develop applications from scratch and handle
            server-side logic efficiently. Additionally, I'm proficient in
            frameworks such as ReactJS, NextJs, and NestJs, which enable me to
            build dynamic and scalable web applications. I'm passionate about
            web development and eager to collaborate on new projects. Thank you
            for visiting my portfolio website!
          </p>
        </div>
      </div>
      <div className='mt-16'>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>PHP</p>
      </div>
    </div>
  );
}

export default About;
