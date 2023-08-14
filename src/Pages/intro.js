import React from 'react';
import pic from '../assets/images/emon-singha.jpg';
import LinkButton from '../components/Button/linkButton';
import { socialLinks } from '../assets/data/social';

function Intro() {
  const linkedinLink = socialLinks.find((link) => link.name === 'linkedin');
  const emailLink = socialLinks.find((link) => link.name === 'gmail');

  return (
    <div
      id='intro'
      className='flex flex-col-reverse md:flex-row items-center justify-around pt-24 md:pt-32 xl:pt-16 h-full w-full'
    >
      <div className='bg-fullBg rounded-md grid grid-flow-col md:grid-flow-row m:w-16 gap-4 p-3'>
        {socialLinks.map((socialLink, index) => (
          <div
            key={index}
            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150'
          >
            <a href={socialLink.link} target='_blank' rel='noreferrer'>
              <img
                src={socialLink.image}
                alt={socialLink.name}
                width={100}
                height={100}
                loading='lazy'
                className='rounded-md w-10 h-auto'
              />
            </a>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center text-center m-8 md:text-left lg:m-20 max-w-2xl min-w-fit'>
        <div className='flex flex-col text-2xl'>
          <h1 className='text-3xl lg:text-5xl xl:text-6xl'>
            Hi! I am Emon Singha
          </h1>
          <p className='mt-3 md:mt-4'>Full Stack Developer</p>
        </div>
        <div className='flex gap-6 md:gap-8 pt-8 md:pt-12 text-center text-pen font-medium'>
          <div>
            <LinkButton link={linkedinLink.link} text='Learn More' />
          </div>
          <div>
            <LinkButton link={emailLink.link} text='Email Me' />
          </div>
        </div>
        <div className='flex pt-6 text-pen text-center font-medium md:hidden'>
          <div>
            <LinkButton
              link='https://drive.google.com/file/d/1AZgGObB3rHB0mzv0AdV0BrbeSgGTygTp/view?usp=sharing'
              text='Resume'
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
