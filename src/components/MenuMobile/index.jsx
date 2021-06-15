import React, { useState } from 'react';
import cx from 'classnames';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Sidebar from '../Sidebar';

import { ReactComponent as Logo } from '../../assets/svg/logo-dark.svg';

import './MenuMobile.scss';

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  open ? disableBodyScroll(document) : enableBodyScroll(document);

  const classes = cx({
    'mobile-menu__button': true,
    'mobile-menu__button--open': open,
  });

  return (
    <div className='mobile-menu'>
      <Logo />
      <div className={classes} onClick={() => setOpen(!open)}>
        <div className='mobile-menu__burger'></div>
      </div>
      <Sidebar open={open} />
    </div>
  );
};

export default MenuMobile;
