import React from 'react';

import Contact from '../Contact';

import { ReactComponent as Iphone } from '../../assets/svg/iphone-header-mockup.svg';

import './Header.scss';

const Header = () => {
  const contactText = [
    'Have any questions? ',
    <a href='https://www.google.com/' className='contact__link' key='[1]'>
      Contact Us
    </a>,
  ];
  return (
    <div className='header'>
      <Iphone className='header__image' />
      <div className='header__wrapper'>
        <Contact
          text={contactText}
          alignment='header'
          title='Start building with our APIs for absolutely free.'
          size='larger'
        />
      </div>
    </div>
  );
};

export default Header;
