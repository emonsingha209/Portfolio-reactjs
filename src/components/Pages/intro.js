import React from 'react';
import pic from '../../images/emon-singha.jpg';
import cv from '../../files/Emon-Singha.pdf';
import LinkButton from '../Button/linkButton';

function Intro() {
  return (
    <div
      id='intro'
      className='flex flex-col-reverse md:flex-row items-center justify-center pt-24 md:pt-32 xl:pt-16 px-4 xl:px-0 h-full'
    >
      <div className='flex flex-col items-center text-center m-8 md:text-left lg:m-20 max-w-2xl min-w-fit'>
        <div className='flex flex-col text-2xl'>
          <h1 className='text-3xl lg:text-5xl xl:text-6xl'>
            Hi! I am Emon Singha
          </h1>
          <p className='mt-3 md:mt-4'>Full Stack Developer</p>
        </div>
        <div className='flex gap-8 md:gap-12 pt-8 text-pen font-medium'>
          <div>
            <LinkButton
              Link={
                <a
                  href='https://www.linkedin.com/in/emon-singha209/'
                  target='_blank'
                  rel='noreferrer'
                >
                Learn More
                </a>
              }
            />
          </div>
          <div>
            <LinkButton
              Link={
                <a href={cv} download>
                  Curriculum Vitae
                </a>
              }
            />
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <img
          className='h-64 w-64 mobile:h-auto mobile:w-auto tablet:h-80 tablet:w-80 xl:h-120 xl:w-120 bg-sky-400 border-4 border-gray-700 rounded-full border-solid'
          src={pic}
          alt='Emon'
        />
      </div>
    </div>
  );
}
export default Intro;
