import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = ({ text, className, type, action, href, to }) => {
  const Component = href ? 'a' : to ? Link : 'button';
  const classes = cx({
    button: true,
    [className]: true,
    'button--primary': type === 'primary',
    'button--light': type === 'light',
  });

  return (
    <Component className={classes} onClick={action}>
      <span className='button__text'>{text}</span>
    </Component>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
