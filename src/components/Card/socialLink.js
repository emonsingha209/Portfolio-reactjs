import React from 'react';

function SocialLink(props) {
  const socialClass =
    'transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150';
  return (
    <div className={socialClass}>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <img src={props.images} alt={props.name} className='rounded-md' />
      </a>
    </div>
  );
}
export default SocialLink;
