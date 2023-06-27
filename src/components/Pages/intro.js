import React from 'react';
import pic from '../../images/emon-singha.jpg';
import cv from '../../files/Emon-Singha.pdf';
import LinkButton from '../Button/linkButton';
import facebook from '../../images/facebook.png';
import whatsapp from '../../images/whatsapp.png';
import gmail from '../../images/gmail.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';

function Intro() {
  return (
    <div
      id='intro'
      className='flex flex-col-reverse md:flex-row items-center justify-around pt-24 md:pt-32 xl:pt-16 h-full w-full'
    >
      <div className='grid grid-flow-col md:grid-flow-row w-4/5 md:w-16 gap-4 p-2'>
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150'>
          <a
            href='https://www.linkedin.com/in/emon-singha209/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={linkedin} alt='linkedin' />
          </a>
        </div>
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150'>
          <a
            href='https://github.com/emonsingha209'
            target='_blank'
            rel='noreferrer'
          >
            <img src={github} alt='github' className='rounded-md' />
          </a>
        </div>
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150'>
          <a
            href='https://www.facebook.com/thounaojam.emon'
            target='_blank'
            rel='noreferrer'
          >
            <img src={facebook} alt='facebook' />
          </a>
        </div>
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150'>
          <a
            href='https://www.instagram.com/thounaojam_emon/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={instagram} alt='instagram' />
          </a>
        </div>
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150'>
          <a
            href='https://wa.me/+8801743217209'
            target='_blank'
            rel='noreferrer'
          >
            <img src={whatsapp} alt='whatsapp' />
          </a>
        </div>
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150'>
          <a
            href='mailto:emonsingha209@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <img src={gmail} alt='gmail' className='bg-gray-100 rounded-md' />
          </a>
        </div>
      </div>
      <div className='flex flex-col items-center text-center m-8 md:text-left lg:m-20 max-w-2xl min-w-fit'>
        <div className='flex flex-col text-2xl'>
          <h1 className='text-3xl lg:text-5xl xl:text-6xl'>
            Hi! I am Emon Singha
          </h1>
          <p className='mt-3 md:mt-4'>Full Stack Developer</p>
        </div>
        <div className='flex gap-8 md:gap-12 pt-8 md:pt-12 text-pen font-medium'>
          <div>
            <LinkButton
              Link={
                <a
                  href='https://www.linkedin.com/in/emon-singha209/'
                  target='_blank'
                  rel='noreferrer'
                  className='block h-full w-full p-3 rounded-lg'
                >
                  Learn More
                </a>
              }
            />
          </div>
          <div>
            <LinkButton
              Link={
                <a
                  href={cv}
                  className='block h-full w-full p-3 rounded-lg'
                  download='Emon-Singha.pdf'
                >
                  Curriculum Vitae
                </a>
              }
            />
          </div>
        </div>
      </div>
      <div className='flex items-center mx-4 lg:pr-4'>
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
