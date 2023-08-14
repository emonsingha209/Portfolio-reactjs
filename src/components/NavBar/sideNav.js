import React from 'react';

import scrollToSection from '../Scroll/scrollFunction';

function sideNav() {
  const liClass = 'w-44 h-14 hover:text-yellow-400';

  return (
    <div>
      <nav>
        <ul className='absolute bg-gray-800 right-0 top-16 h-screen text-center flex flex-col text-2xl divide-y divide-sky-400 font-thin cursor-pointer font-serif'>
          <li className={liClass}>
            <a
              href='#intro'
              onClick={(event) => scrollToSection(event, 'intro')}
              className='h-full w-full flex items-center justify-center'
            >
              Home
            </a>
          </li>
          <li className={liClass}>
            <a
              href='#about'
              onClick={(event) => scrollToSection(event, 'about')}
              className='h-full w-full flex items-center justify-center'
            >
              About
            </a>
          </li>
          <li className={liClass}>
            <a
              href='#projects'
              onClick={(event) => scrollToSection(event, 'projects')}
              className='h-full w-full flex items-center justify-center'
            >
              Projects
            </a>
          </li>
          <li className={liClass}>
            <a
              href='https://drive.google.com/file/d/1AZgGObB3rHB0mzv0AdV0BrbeSgGTygTp/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='h-full w-full flex items-center justify-center'
            >
              Resume
            </a>
          </li>
          <li className={liClass}>
            <a
              href='#contact'
              onClick={(event) => scrollToSection(event, 'contact')}
              className='h-full w-full flex items-center justify-center'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default sideNav;
