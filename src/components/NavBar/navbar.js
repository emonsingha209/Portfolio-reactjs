import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  const scroll = {
    smooth: true,
    duration: 500,
  };
  const linkClass = 'h-full px-2 flex items-center justify-center cursor-pointer';
  const liClass = 'hover:text-yellow-400 h-full flex items-center justify-center';
  return (
    <div>
      <nav>
        <ul className='md:flex text-2xl gap-4 mr-4 font-thin font-serif h-16'>
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

export default NavBar;
