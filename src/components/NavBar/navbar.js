import React from 'react';

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
}

function NavBar() {
  const liClass = 'hover:text-yellow-400 h-full flex items-center justify-center';

  return (
    <div>
      <nav>
        <ul className='md:flex text-2xl gap-4 mr-4 font-thin font-serif h-16'>
          <li className={liClass}>
            <a
              href='#intro'
              onClick={(event) => scrollToSection(event, 'intro')}
              className='h-full flex xl:px-1 items-center justify-center'
            >
              Home
            </a>
          </li>
          <li className={liClass}>
            <a
              href='#about'
              onClick={(event) => scrollToSection(event, 'about')}
              className='h-full flex xl:px-1 items-center justify-center'
            >
              About
            </a>
          </li>
          <li className={liClass}>
            <a
              href='#projects'
              onClick={(event) => scrollToSection(event, 'projects')}
              className='h-full flex xl:px-1 items-center justify-center'
            >
              Projects
            </a>
          </li>
          <li className={liClass}>
            <a
              href='https://drive.google.com/file/d/1AZgGObB3rHB0mzv0AdV0BrbeSgGTygTp/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='h-full flex xl:px-1 items-center justify-center'
            >
              Resume
            </a>
          </li>
          <li className={liClass}>
            <a
              href='#contact'
              onClick={(event) => scrollToSection(event, 'contact')}
              className='h-full flex xl:px-1 items-center justify-center'
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
