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
        <ul className='absolute bg-gray-800 right-0 top-16 h-screen text-center flex flex-col gap-8 text-2xl p-8 font-thin cursor-pointer font-serif'>
          <li className='hover:text-yellow-400'>
            <Link to='#intro' {...scroll}>
              Home
            </Link>
          </li>
          <li className='hover:text-yellow-400'>
            <Link to='#about' {...scroll}>
              About
            </Link>
          </li>
          <li className='hover:text-yellow-400'>
            <Link to='#projects' {...scroll}>
              Projects
            </Link>
          </li>
          <li className='hover:text-yellow-400'>
            <Link to='#Contact' {...scroll}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default sideNav;
