import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Title.scss';

const Title = ({ text, className, size }) => {
  const classes = cx({
    title: true,
    [className]: true,
    'title--smaller': size === 'smaller',
    'title--larger': size === 'larger',
  });

  return <h2 className={classes}>{text}</h2>;
};

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
};

export default Title;
