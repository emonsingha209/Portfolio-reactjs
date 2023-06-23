import React from 'react';
function LinkButton(props) {
  return (
    <div>
      <div
        className='bg-yellow-400 w-fit rounded-lg ring-2 ring-yellow-400 ring-offset-2 ring-offset-gray-800 
            hover:bg-yellow-500 hover:ring-yellow-500'
      >
        <button className='cursor-pointer'>{props.Link}</button>
      </div>
    </div>
  );
}
export default LinkButton;
