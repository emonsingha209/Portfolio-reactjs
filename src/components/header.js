import React from 'react';
import NavBar from './navbar';
import { Link } from 'react-scroll';

function Header(props) {
  return (
    <div>
      <title>{props.title}</title>
      <div className='fixed top-0 left-0 right-0 w-screen h-16 bg-gray-800 text-white px-6 py-4 flex justify-between'>
        <div className='font-extrabold text-2xl cursor-pointer'>
          <Link to='#intro' smooth={true} duration={500}>
            <div className='flex gap-2'>
              <h1 className='text-blue-500'>EMON</h1>
              <h1 className='text-yellow-500'>SINGHA</h1>
            </div>
          </Link>
        </div>
        <div>
          <NavBar />
        </div>
        <div className='md:hidden flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 25'
            stroke='#fff'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
