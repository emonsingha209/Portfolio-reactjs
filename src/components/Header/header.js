import React from 'react';
import NavBar from '../NavBar/navbar';
import NavControl from '../NavBar/navToggle';
import { Link } from 'react-scroll';
import logo from '../../assets/images/Others/emonsinghalogo.webp';

function Header() {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 w-auto h-16 bg-gray-950 text-white flex justify-between'>
        <div className='font-extrabold text-2xl cursor-pointer flex items-center justify-center ml-4 md:ml-6'>
          <Link to='intro' smooth={true} duration={500}>
            <div className='flex gap-2'>
              <img
                className='w-7 md:w-8 h-7 md:h-8 rounded-full'
                src={logo}
                alt='logo'
              />
              <h1 className='text-blue-500'>EMON</h1>
              <h1 className='text-yellow-500'>SINGHA</h1>
            </div>
          </Link>
        </div>
        <div className='hidden md:flex'>
          <NavBar />
        </div>
        <div className='md:hidden flex items-center justify mr-2'>
          <NavControl />
        </div>
      </div>
    </div>
  );
}

export default Header;
