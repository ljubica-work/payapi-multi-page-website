import React from 'react';

import Button from '../Button';

import { ReactComponent as Logo } from '../../assets/svg/logo-dark.svg';

import './MenuDesktop.scss';

const MenuDesktop = () => {
  return (
    <div className='menu-desktop'>
      <div className='menu-desktop__group'>
        <Logo className='menu-desktop__logo' />
        <div className='menu-desktop__links'>
          <a href='https://www.google.com/' className='menu-desktop__link'>
            Pricing
          </a>
          <a href='https://www.google.com/' className='menu-desktop__link'>
            About
          </a>
          <a href='https://www.google.com/' className='menu-desktop__link'>
            Contact
          </a>
        </div>
      </div>

      <Button
        text='Schedule a Demo'
        className='menu-desktop__button'
        type='primary'
      />
    </div>
  );
};

export default MenuDesktop;
