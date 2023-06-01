import React from 'react';
import pic from '../images/emon.png';

function Intro() {
  return (
    <div
      id='#intro'
      className='flex flex-col md:flex-row items-center justify-center h-screen pt-20 md:pt-3'
    >
      <div className='flex-1 items-center'>
        <img className='h-auto md:h-auto w-full' src={pic} alt='Emon' />
      </div>
      <div className='flex-1 text-center m-10 md:text-left md:m-20'>
        <div className='flex flex-col text-2xl md:text-5xl font-serif'>
          <h1>Hi, I am Emon Singha.</h1>
          <h2 className='mt-1 md:mt-4'>Full Stack Developer</h2>
        </div>
      </div>
    </div>
  );
}
export default Intro;
