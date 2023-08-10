import React from 'react';
import pic from '../assets/images/emon-singha.jpg';
import cv from '../assets/files/Emon_Singha.pdf';
import LinkButton from '../components/Button/linkButton';
import facebook from '../assets/images/facebook.png';
import whatsapp from '../assets/images/whatsapp.png';
import gmail from '../assets/images/gmail.jpg';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';

function Intro() {
  const linkButtonClass = 'block h-full w-full p-3 rounded-lg';

  const socialLinks = [
    {
      link: 'https://www.linkedin.com/in/emon-singha209/',
      image: linkedin,
      name: 'linkedin',
    },
    {
      link: 'https://github.com/emonsingha209',
      image: github,
      name: 'github',
    },
    {
      link: 'https://www.facebook.com/thounaojam.emon',
      image: facebook,
      name: 'facebook',
    },
    {
      link: 'https://www.instagram.com/thounaojam_emon/',
      image: instagram,
      name: 'instagram',
    },
    {
      link: 'https://wa.me/+8801743217209',
      image: whatsapp,
      name: 'whatsapp',
    },
    {
      link: 'mailto:emonsingha209@gmail.com',
      image: gmail,
      name: 'gmail',
    },
  ];
  return (
    <div
      id='intro'
      className='flex flex-col-reverse md:flex-row items-center justify-around pt-24 md:pt-32 xl:pt-16 h-full w-full'
    >
      <div className='bg-fullBg rounded-md grid grid-flow-col md:grid-flow-row m:w-16 gap-4 p-3'>
        {socialLinks.map((socialLink, index) => (
          <div key={index} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150'>
            <a href={socialLink.link} target='_blank' rel='noreferrer'>
              <img src={socialLink.image} alt={socialLink.name} width={100} height={100} loading='lazy' className='rounded-md w-10' />
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
        <div className='flex gap-8 md:gap-12 pt-8 md:pt-12 text-pen font-medium'>
          <div>
            <LinkButton
              Link={
                <a
                  href='https://www.linkedin.com/in/emon-singha209/'
                  target='_blank'
                  rel='noreferrer'
                  className={linkButtonClass}
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
                  className={linkButtonClass}
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