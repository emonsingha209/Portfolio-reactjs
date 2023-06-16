import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  const scroll = {
    smooth: true,
    duration: 500,
  };
  return (
    <div>
      <nav>
        <ul className='md:flex text-2xl gap-8 mr-4 font-thin cursor-pointer font-serif'>
          <li className='hover:text-yellow-400'>
            <Link to='intro' {...scroll}>
              Home
            </Link>
          </li>
          <li className='hover:text-yellow-400'>
            <Link to='about' {...scroll}>
              About
            </Link>
          </li>
          <li className='hover:text-yellow-400'>
            <Link to='projects' {...scroll}>
              Projects
            </Link>
          </li>
          <li className='hover:text-yellow-400'>
            <Link to='contact' {...scroll}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
