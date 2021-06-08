import React from 'react';
import Partners from '../Partners';
import Title from '../Title';
import Paragraph from '../Paragraph';
import Button from '../Button';
import Circle from '../Circle';

import './Banner.scss';

const Banner = () => {
  return (
    <div className='banner'>
      <Circle />
      <div className='banner__wrapper'>
        <Partners />
        <div className='banner__inner'>
          <Title text={'Who we work with'}/>
          <Paragraph />
          <Button text={'About Us'}/>
        </div>
      </div>
    </div>
  );
}

export default Banner;