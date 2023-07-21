import React from 'react';
function LinkButton(props) {
  return (
    <div>
      <div
        className='bg-blue-500 w-fit rounded-lg ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-800 
            hover:bg-blue-600 hover:ring-blue-600 text-white'
      >
        <button className='cursor-pointer'>{props.Link}</button>
      </div>
    </div>
  );
}
export default LinkButton;
