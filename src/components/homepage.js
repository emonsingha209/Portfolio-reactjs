import React from 'react';
import Intro from './Pages/intro';
import About from './Pages/about';
import Project from './Pages/project';
import Contact from './Pages/contact';

function HomePage() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-900 text-white'>
      <div className='h-auto xl:h-screen'>
        <Intro />
      </div>
      <div className='h-auto xl:h-screen'>
        <About />
      </div>
      <div className='h-auto'>
        <Project />
      </div>
      <div className='h-auto xl:min-h-screen xl:max-h-auto'>
        <Contact />
      </div>
    </div>
  );
}
export default HomePage;
