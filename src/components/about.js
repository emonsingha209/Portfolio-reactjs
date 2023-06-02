import React from 'react';

function About() {
  return (
    <div
      id='#about'
      className='flex flex-col md:flex-row items-center justify-center h-screen pt-20 md:pt-3'
    >
      <div className='bg-green-600 text-5xl p-4 rounded-s-2xl'>
        <h1>About me</h1>
      </div>
      <div className='w-4/5 text-2xl max-h-full bg-sky-800 rounded p-4 overflow-y-clip text-white'>
        <p>
          Hi there! My name is Emon Singha, and I'm a web developer currently in
          my final year at American International University-Bangladesh. I
          specialize in web development using HTML, CSS, JavaScript, PHP,
          PostgreSQL, and MySQL, and I have experience working with frameworks
          such as ReactJS, NextJs, and NestJs.
        </p>
        <p>
          What sets me apart from others in my passion for learning and my
          dedication to my work. I enjoy talking on new challenges and expanding
          my knowledge and skills. I'm also proud of work I've done so far,
          including projects in OpelGL and Web development.
        </p>
        <p>
          Thank you for taking the time to visit my portfolio website, and I
          look forward to the opportunity to collaborate and create with you.
        </p>
      </div>
    </div>
  );
}

export default About;
