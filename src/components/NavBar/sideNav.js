import React from 'react';
import { Link } from 'react-scroll';

function sideNav() {
  const scroll = {
    smooth: true,
    duration: 500,
    offset: -50,
  };
  const linkClass = 'h-full w-full flex items-center justify-center';
  const liClass = 'w-36 h-14 hover:text-yellow-400';
  return (
    <div>
      <nav>
        <ul className='absolute bg-gray-800 right-0 top-16 h-screen text-center flex flex-col text-2xl divide-y divide-sky-400 font-thin cursor-pointer font-serif'>
          <li className={liClass}>
            <Link to='intro' {...scroll} className={linkClass}>
              Home
            </Link>
          </li>
          <li className={liClass}>
            <Link to='about' {...scroll} className={linkClass}>
              About
            </Link>
          </li>
          <li className={liClass}>
            <Link to='projects' {...scroll} className={linkClass}>
              Projects
            </Link>
          </li>
          <li className={liClass}>
            <Link to='contact' {...scroll} className={linkClass}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default sideNav;
