import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = ({ text, className, type, onclick, href, to }) => {
  const classes = cx({
    button: true,
    [className]: true,
    'button--primary': type === 'primary',
    'button--light': type === 'light',
    'button--dark': type === 'dark',
  });

  if (href) {
    return (
      <a className={classes} href={href}>
        <span className='button__text'>{text}</span>
      </a>
    );
  } else if (to) {
    return (
      <Link className={classes} to={to}>
        <span className='button__text'>{text}</span>
      </Link>
    );
  } else {
    return (
      <button className={classes} onClick={onclick}>
        <span className='button__text'>{text}</span>
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
