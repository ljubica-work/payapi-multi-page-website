import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.scss';

const Button = ({ text, className, type, action }) => {
  const classes = cx({
    button: true,
    [className]: true,
    'button--primary': type === 'primary',
    'button--light': type === 'light',
  });

  return (
    <button className={classes} onClick={action}>
      <span className='button__text'>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
