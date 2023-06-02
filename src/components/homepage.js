import React from 'react';
import Intro from './intro';
import About from './about';

function HomePage() {
  return (
    <div className='h-screen bg-white text-pen'>
      <div className='h-full'>
        <Intro />
      </div>
      <div className='h-full bg-inherit'>
        <About />
      </div>
    </div>
  );
}

export default HomePage;
