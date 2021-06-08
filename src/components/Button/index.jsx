import React from 'react';

import './Button.scss';

const Button = ({text}) => {
  return (
    <a href='https://www.google.com/' className="button">
      <div className='button__inner'>
        <span className='button__text'>{text}</span>
      </div>
    </a>
  );
}

export default Button;