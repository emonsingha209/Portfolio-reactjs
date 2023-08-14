import React from 'react';

function scrollToTarget(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  }
}

function NavBar() {
  const liClass =
    'hover:text-yellow-400 h-full flex items-center justify-center';

  return (
    <div>
      <nav>
        <ul className='md:flex text-2xl gap-4 mr-4 font-thin font-serif h-16'>
          <li className={liClass}>
            <a
              href='#intro'
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('intro');
              }}
              className='h-full px-2 flex items-center justify-center'
            >
              Home
            </a>
          </li>
          <li className={liClass}>
            <a
              href='#about'
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('about');
              }}
              className='h-full px-2 flex items-center justify-center'
            >
              About
            </a>
          </li>
          <li className={liClass}>
            <a
              href='#projects'
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('projects');
              }}
              className='h-full px-2 flex items-center justify-center'
            >
              Projects
            </a>
          </li>
          <li className={liClass}>
            <a
              href='https://drive.google.com/file/d/1AZgGObB3rHB0mzv0AdV0BrbeSgGTygTp/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='h-full px-2 flex items-center justify-center cursor-pointer'
            >
              Resume
            </a>
          </li>
          <li className={liClass}>
            <a
              href='#contact'
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget('contact');
              }}
              className='h-full px-2 flex items-center justify-center'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
