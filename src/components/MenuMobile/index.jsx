import React, { useState } from 'react';

import Sidebar from '../Sidebar';

import { ReactComponent as Logo } from '../../assets/svg/logo-dark.svg';

import './MenuMobile.scss';

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='mobile-menu'>
      <Logo />
      <div
        className={`mobile-menu__button ${
          open ? 'mobile-menu__button--open' : ''
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className='mobile-menu__burger'></div>
      </div>
      <Sidebar open={open} />
    </div>
  );
};

export default MenuMobile;
