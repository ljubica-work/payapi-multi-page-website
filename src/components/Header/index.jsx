import React from 'react';
import PropTypes from 'prop-types';

import ContactComponent from '../ContactComponent';

import { ReactComponent as Iphone } from '../../assets/svg/iphone-header-mockup.svg';

import './Header.scss';

const Header = ({ setIsPopupVisible }) => {
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
        <ContactComponent
          text={contactText}
          alignment='header'
          title='Start building with our APIs for absolutely free.'
          size='larger'
          setIsPopupVisible={setIsPopupVisible}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  setIsPopupVisible: PropTypes.func,
};

export default Header;
