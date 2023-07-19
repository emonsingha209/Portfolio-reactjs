import React from 'react';

function ProjectCard(props) {
  return (
    <div className='flex flex-col justify-between bg-gray-700 rounded p-2 h-full text-lg'>
      <div className='grow p-2'>
        <div className='pb-1 font-bold text-xl'>
          <p>Project: {props.title}</p>
        </div>
        <div className='pb-1 leading-relaxed'>
          <p>{props.details}</p>
        </div>
        <div className='mt-2'>
          <p>Languages: {props.languages}</p>
        </div>
      </div>
      <div className='bg-gray-900 text-center cursor-pointer hover:bg-gray-950 font-semibold text-lg rounded'>
        <button className='w-full'>
          <a
            href={props.projectLink}
            target='_blank'
            rel='noreferrer'
            className='block w-full h-full p-2'
          >
            Source Code
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
