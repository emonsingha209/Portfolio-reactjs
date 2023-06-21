import React from 'react';
import NavBar from '../NavBar/navbar';
import NavControl from '../NavBar/navToggle';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 w-auto h-16 bg-gray-950 text-white p-4 flex justify-between'>
        <div className='font-extrabold text-2xl cursor-pointer'>
          <Link to='intro' smooth={true} duration={500}>
            <div className='flex gap-2'>
              <h1 className='text-blue-500'>EMON</h1>
              <h1 className='text-yellow-500'>SINGHA</h1>
            </div>
          </Link>
        </div>
        <div className='hidden md:flex'>
          <NavBar />
        </div>
        <div className='md:hidden'>
          <NavControl />
        </div>
      </div>
    </div>
  );
}

export default Header;
