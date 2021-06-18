import React from 'react';

import './Infographic.scss';

const info = [
  {
    title: 'Team members',
    number: '300+',
  },
  {
    title: 'Offices in the US',
    number: '3',
  },
  {
    title: 'Transactions analyzed',
    number: '10M+',
  },
];

const Infographic = () => {
  const renderNumberCards = () => {
    return info.map((item) => (
      <div className='infographic__card'>
        <div className='infographic__divider'></div>
        <h4 className='infographic__title'>{item.title}</h4>
        <div className='infographic__number'>{item.number}</div>
        <div className='infographic__divider'></div>
      </div>
    ));
  };
  return <div className='infographic'>{renderNumberCards()}</div>;
};

export default Infographic;
