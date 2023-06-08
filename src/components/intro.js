import React from 'react';
import pic from '../images/emon.png';
import cv from '../files/Emon-Singha.pdf';

function Intro() {
  return (
    <div
      id='#intro'
      className='flex flex-col-reverse md:flex-row items-center justify-center h-screen pt-10 lg:pt-16'
    >
      <div className='flex flex-col items-center text-center m-8 md:text-left lg:m-20 max-w-2xl min-w-fit'>
        <div className='flex flex-col text-2xl'>
          <h1 className='text-3xl lg:text-5xl xl:text-6xl'>
            Hi! I am Emon Singha
          </h1>
          <p className='mt-1 md:mt-4'>Full Stack Developer</p>
        </div>
        <div className='flex gap-8 md:gap-12 pt-8 text-pen font-medium'>
          <div
            className='bg-lime-500 w-fit p-3 rounded-lg ring-2 ring-lime-500 ring-offset-2 ring-offset-gray-800 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'
          >
            <button>Learn More</button>
          </div>
          <div
            className='bg-lime-500 w-fit p-3 rounded-lg ring-2 ring-lime-500 ring-offset-2 ring-offset-gray-800 
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'
          >
            <a href={cv} download>
              Curriculum Vitae
            </a>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <img
          className='h-64 w-64 mobile:h-80 mobile:w-80 md:h-96 md:w-96 bg-sky-400 border border-gray-900 rounded-full border-solid'
          src={pic}
          alt='Emon'
        />
      </div>
    </div>
  );
}
export default Intro;
