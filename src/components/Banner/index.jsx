import React from 'react';
import Partners from '../Partners';
import Title from '../Title';
import Paragraph from '../Paragraph';
import Button from '../Button';
import Circle from '../Circle';

import './Banner.scss';

const Banner = () => {

const paragraphText = 'Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.';

  return (
    <div className='banner'>
      <Circle className='banner__circle'/>
      <div className='banner__wrapper'>
        <Partners className='banner__partners' imageColor='white'/>
        <div className='banner__inner'>
          <Title className='banner__title' text='Who we work with'/>
          <Paragraph className='banner__paragraph' text={paragraphText} />
          <Button className='banner__button' text='About Us'/>
        </div>
      </div>
    </div>
  );
}

export default Banner;