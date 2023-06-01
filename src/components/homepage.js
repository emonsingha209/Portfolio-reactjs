import React from 'react';
import Intro from './intro';

function HomePage() {
  return (
    <div className='h-screen bg-fullBg text-white'>
      <div className='h-full'>
        <Intro />
      </div>
      <div className='h-full bg-inherit'>
        <Intro />
      </div>
    </div>
  );
}

export default HomePage;
