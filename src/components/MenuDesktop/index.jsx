import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import Button from '../Button';

import { ReactComponent as Logo } from '../../assets/svg/logo-dark.svg';

import './MenuDesktop.scss';

const MenuDesktop = () => {
  return (
    <div className='menu-desktop'>
      <div className='menu-desktop__group'>
        <Link to={routes.HOME}>
          <Logo className='menu-desktop__logo' />
        </Link>
        <div className='menu-desktop__links'>
          <Link to={routes.PRICING} className='menu-desktop__link'>
            Pricing
          </Link>
          <Link to={routes.ABOUT} className='menu-desktop__link'>
            About
          </Link>
          <Link to={routes.CONTACT} className='menu-desktop__link'>
            Contact
          </Link>
        </div>
      </div>

      <Button
        text='Schedule a Demo'
        className='menu-desktop__button'
        type='primary'
        to={routes.CONTACT}
      />
    </div>
  );
};

export default MenuDesktop;
