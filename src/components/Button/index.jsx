import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({text, className}) => {
  return (
    <a href='https://www.google.com/' className={`button ${className}`}>
      <div className='button__inner'>
        <span className='button__text'>{text}</span>
      </div>
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}

export default Button;