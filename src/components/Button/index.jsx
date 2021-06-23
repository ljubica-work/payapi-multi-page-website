import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = ({ text, className, type, onclick, href, to, isLoading }) => {
  const classes = cx({
    button: true,
    [className]: true,
    'button--primary': type === 'primary',
    'button--light': type === 'light',
    'button--dark': type === 'dark',
    'button--loading': isLoading,
  });

  if (href) {
    return (
      <a className={classes} href={href} onClick={onclick} disabled={isLoading}>
        <span className='button__text'>{text}</span>
        <span className='button__loader'></span>
      </a>
    );
  } else if (to) {
    return (
      <Link className={classes} to={to} onClick={onclick} disabled={isLoading}>
        <span className='button__text'>{text}</span>
        <span className='button__loader'></span>
      </Link>
    );
  } else {
    return (
      <button className={classes} onClick={onclick} disabled={isLoading}>
        <span className='button__text'>{text}</span>
        <span className='button__loader'></span>
      </button>
    );
  }
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onclick: PropTypes.func,
  href: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
