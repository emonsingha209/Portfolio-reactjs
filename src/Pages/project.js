import React from 'react';
import { projects } from '../assets/data/project';

function Project() {
  return (
    <div id='projects' className='mx-2 md:mx-4 pt-8 md:pt-16 h-full'>
      <div className='text-yellow-400 font-bold text-3xl md:text-5xl text-center md:mt-4 mb-2 md:mb-4'>
        <h2>PROJECTS</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 content-stretch p-4 gap-8 h-auto font-poppins'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex flex-col justify-between bg-gray-700 rounded p-2 h-full text-lg'
          >
            <div className='grow p-2'>
              <div className='pb-1 font-bold text-xl'>
                <p>Project: {project.title}</p>
              </div>
              <div className='pb-1 leading-relaxed'>
                <p>{project.details}</p>
              </div>
              <div className='mt-2'>
                <p>Languages & Tech: {project.languages}</p>
              </div>
            </div>
            <div className='flex gap-2'>
              {project.liveDemoLink ? (
                <div className='bg-gray-900 w-1/2 text-center cursor-pointer hover:bg-gray-950 font-semibold text-lg rounded'>
                  <button className='w-full'>
                    <a
                      href={project.liveDemoLink}
                      target='_blank'
                      rel='noreferrer'
                      className='block w-full h-full p-2'
                    >
                      Live Demo
                    </a>
                  </button>
                </div>
              ) : (
                <div className='bg-gray-900 w-1/2 text-center cursor-pointer hover:bg-gray-950 font-semibold text-lg rounded'>
                  <button
                    className='w-full h-full p-2 cursor-not-allowed'
                    disabled
                  >
                    No Live Demo Available
                  </button>
                </div>
              )}
              <div className='bg-gray-900 w-1/2 text-center cursor-pointer hover:bg-gray-950 font-semibold text-lg rounded flex items-center justify-center'>
                <button className='w-full'>
                  <a
                    href={project.projectLink}
                    target='_blank'
                    rel='noreferrer'
                    className='block w-full h-full p-2'
                  >
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
