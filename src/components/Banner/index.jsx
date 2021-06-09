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
      <Circle className={'banner__circle'}/>
      <div className='banner__wrapper'>
        <Partners className={'banner__partners'} imageColor={'white'}/>
        <div className='banner__inner'>
          <Title className={'banner__title'} text={'Who we work with'} />
          <Paragraph className={'banner__paragraph'}/>
          <Button className={'banner__button'} text={'About Us'}/>
        </div>
      </div>
    </div>
  );
}

export default Banner;