import React from 'react';

function Skill(props) {
  return (
    <div>
      <div className='p-8 pb-4'>
        <img src={props.logo} alt={props.skill} />
      </div>
      <div>
        <p>{props.skill}</p>
      </div>
    </div>
  );
}
export default Skill;
