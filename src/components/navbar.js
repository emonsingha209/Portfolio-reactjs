import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  const scroll = {
    smooth: true,
    duration: 500,
  };
  return (
    <nav>
      <ul className='md:flex text-xl gap-8 mr-4 cursor-pointer font-poppins'>
        <li>
          <Link to='#intro' {...scroll}>
            Home
          </Link>
        </li>
        <li>
          <Link to='#about' {...scroll}>
            About
          </Link>
        </li>
        <li>
          <Link to='#projects' {...scroll}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='#Contact' {...scroll}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
