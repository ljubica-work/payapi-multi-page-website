import React from 'react';

import './Circle.scss';

const Circle = ({className}) => {
  return (
    <div className={`circle ${className}`}></div>
  );
}

export default Circle;