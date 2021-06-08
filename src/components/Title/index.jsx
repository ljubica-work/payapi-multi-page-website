import React from 'react';

import './Title.scss';

const Title = ({text}) => {
  return (
    <h2 className='title title--light'>{text}</h2>
  );
}

export default Title;