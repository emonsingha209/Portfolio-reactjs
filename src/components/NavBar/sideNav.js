import React from 'react';
import { Link } from 'react-scroll';

function sideNav() {
  const scroll = {
    smooth: true,
    duration: 500,
    offset: -50,
  };
  return (
    <div>
      <nav>
        <ul className='absolute bg-gray-800 right-0 top-16 h-screen text-center flex flex-col text-2xl divide-y divide-sky-400 font-thin cursor-pointer font-serif'>
          <li className='px-12 py-4 hover:text-yellow-400'>
            <Link to='intro' {...scroll}>
              Home
            </Link>
          </li>
          <li className='py-4 hover:text-yellow-400'>
            <Link to='about' {...scroll}>
              About
            </Link>
          </li>
          <li className='py-4 hover:text-yellow-400'>
            <Link to='projects' {...scroll}>
              Projects
            </Link>
          </li>
          <li className='py-4 hover:text-yellow-400'>
            <Link to='contact' {...scroll}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default sideNav;
