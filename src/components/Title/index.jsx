import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Title.scss';

const Title = ({ text, className }) => {
  const classes = cx('title', className);

  return <h2 className={classes}>{text}</h2>;
};

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
