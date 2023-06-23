import React from 'react';
import ProjectCard from '../Card/projectCard';

function Project() {
  return (
    <div
      id='projects'
      className='mx-0 md:mx-4 p-4 md:px-0 md:pt-20 md:pb-4 h-full'
    >
      <div className='text-yellow-400 font-bold text-2xl md:text-4xl text-center mb-2 md:mb-4'>
        <h2>PROJECTS</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 content-stretch p-4 gap-4 h-full'>
        <div>
          <ProjectCard
            title='SHARPENERS Website'
            details='The SHARPENERS website is a comprehensive platform designed to
            showcase a leading educational institution. It offers information
            about programs and degrees, online resources for students, news
            updates, and admissions details. The responsive website ensures
            accessibility across devices, making it a user-friendly hub for
            prospective students and current learners.'
            languages='HTML, CSS, JavaScript, PHP.'
            projectLink={
              <a
                href='https://github.com/emonsingha209/SHARPENERS'
                target='_blank'
                rel='noreferrer'
              >
                Source Code
              </a>
            }
          />
        </div>
        <div>
          <ProjectCard
            title='OpenGL London Tower Bridge - A Digital Remake'
            details="An OpenGL project about London's iconic Tower Bridge, meticulously
          recreated with meticulous attention to detail, capturing its majesty
          and architectural finesse. This visually stunning experience offers
          viewers a captivating glimpse into the beauty of this historical
          landmark."
            languages='OpenGL'
            projectLink={
              <a
                href='https://github.com/emonsingha209/London-Tower-Bridge--Opengl'
                target='_blank'
                rel='noreferrer'
              >
                Source Code
              </a>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
