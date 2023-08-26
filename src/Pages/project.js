import React from 'react';
import { projects } from '../assets/data/project';

function Project() {
  return (
    <div id='projects' className='h-full pt-8 mx-2 md:mx-4 md:pt-16'>
      <div className='mb-2 text-3xl font-bold text-center text-yellow-400 md:text-5xl md:mt-4 md:mb-4'>
        <h2>PROJECTS</h2>
      </div>
      <div className='grid h-auto grid-cols-1 gap-8 p-4 text-gray-200 md:grid-cols-2 content-stretch'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='flex flex-col justify-between h-full p-2 pt-1 text-base bg-gray-700 rounded'
          >
            <div className='p-2 grow'>
              <div className='text-xl font-bold text-yellow-400'>
                <p>Project: {project.title}</p>
              </div>
              {/* <div className='w-full my-4 h-80'>
                <img src='https://geekflare.com/wp-content/uploads/2023/03/img-placeholder.png' alt='ye' className='object-cover w-full h-full rounded' /> 
              </div> */}
              <div className='pb-1 subpixel-antialiased leading-relaxed'>
                <p>{project.details}</p>
              </div>
              <div className='mt-2'>
                <p>Languages & Tech: {project.languages}</p>
              </div>
            </div>
            <div className='flex gap-2'>
              {project.liveDemoLink ? (
                <div className='w-1/2 text-lg font-semibold text-center bg-gray-900 rounded cursor-pointer hover:bg-gray-950'>
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
                <div className='w-1/2 text-lg font-semibold text-center bg-gray-900 rounded cursor-pointer hover:bg-gray-950'>
                  <button
                    className='w-full h-full p-2 text-gray-300 cursor-not-allowed'
                    disabled
                  >
                    No Live Demo Available
                  </button>
                </div>
              )}
              <div className='flex items-center justify-center w-1/2 text-lg font-semibold text-center bg-gray-900 rounded cursor-pointer hover:bg-gray-950'>
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
