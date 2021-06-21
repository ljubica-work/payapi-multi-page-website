import React from 'react';

import infographicData from './data';

import './Infographic.scss';

const Infographic = () => {
  const renderNumberCards = () => {
    return infographicData.map((item) => (
      <div className='infographic__card' key={item.number}>
        <h4 className='infographic__title'>{item.title}</h4>
        <div className='infographic__number'>{item.number}</div>
      </div>
    ));
  };
  return <div className='infographic'>{renderNumberCards()}</div>;
};

export default Infographic;
