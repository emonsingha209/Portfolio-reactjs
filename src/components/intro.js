import React from 'react';
import pic from '../images/emon.png';

function Intro() {
  return (
    <div
      id='#intro'
      className='flex flex-col-reverse lg:flex-row items-center justify-center h-screen pt-10 lg:pt-16'
    >
      <div className='flex flex-col items-center text-center m-4 md:text-left lg:m-20 max-w-2xl min-w-fit'>
        <div className='flex flex-col text-2xl'>
          <h1 className='md:text-4xl lg:text-5xl xl:text-6xl'>
            Hi! I am Emon Singha
          </h1>
          <p className='mt-1 md:mt-4'>Full Stack Developer</p>
        </div>
        <div
          className='bg-blue-600 w-fit p-3 text-white mt-2 md:mt-8 font-semibold rounded-lg ring-offset-2 ring 
        ring-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'
        >
          <button>Learn More</button>
        </div>
      </div>
      <div className='flex items-center px-8'>
        <img
          className='h-64 w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96 bg-sky-300 border-2 border-fullBg rounded-full border-solid'
          src={pic}
          alt='Emon'
        />
      </div>
    </div>
  );
}
export default Intro;
