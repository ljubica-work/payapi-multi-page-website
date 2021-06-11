import React from 'react';
import PropTypes from 'prop-types';

import './Circle.scss';

const Circle = ({ className }) => {
  return <div className={`circle ${className}`}></div>;
};

Circle.propTypes = {
  className: PropTypes.string,
};

export default Circle;
