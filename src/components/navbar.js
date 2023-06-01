import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  const scroll = {
    smooth: true,
    duration: 500,
  };
  return (
    <nav>
      <ui>
        <div className='md:flex text-xl gap-8 px-10 hidden cursor-pointer'>
          <Link to='#intro' {...scroll}>
            Home
          </Link>
          <Link to='#about' {...scroll}>
            About
          </Link>
          <Link to='#projects' {...scroll}>
            Projects
          </Link>
          <Link to='#Contact' {...scroll}>
            Contact
          </Link>
        </div>
      </ui>
    </nav>
  );
}

export default NavBar;
