import React from 'react';
import Intro from './intro';
import About from './about';

function HomePage() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-900 text-white'>
      <div>
        <Intro />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default HomePage;
