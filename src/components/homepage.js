import React from 'react';
import Intro from './intro';
import About from './about';

function HomePage() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-900 text-white'>
      <div className='h-auto lg:h-screen'>
        <Intro />
      </div>
      <div className='h-auto lg:h-screen'>
        <About />
      </div>
    </div>
  );
}
export default HomePage;
