import React from 'react';

function LinkButton(props) {
  return (
    <div>
      <div
        className='bg-navColor w-fit rounded-lg ring-2 ring-navColor ring-offset-2 ring-offset-gray-800 
            hover:bg-blue-600 hover:ring-blue-600 text-white'
      >
        <a
          href={props.link}
          target='_blank'
          rel='noreferrer'
          className='block h-full w-32 p-3 rounded-lg'
        >
          {props.text}
        </a>
      </div>
    </div>
  );
}

export default LinkButton;
