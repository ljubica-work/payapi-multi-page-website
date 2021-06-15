import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';

import Sidebar from '../Sidebar';

import { ReactComponent as Logo } from '../../assets/svg/logo-dark.svg';

import './MenuMobile.scss';

const MenuMobile = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const CloseOnClickOutside = (ref, handler) => {
    console.log(ref.current);
    useEffect(() => {
      const listener = (e) => {
        console.log(e.target.className);
        if (
          !ref.current ||
          ref.current.contains(e.target) ||
          e.target.className.includes('mobile-menu__button--open')
        ) {
          return;
        }
        handler(e);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.addEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };

  CloseOnClickOutside(node, () => setOpen(false));

  const classes = cx({
    'mobile-menu__button': true,
    'mobile-menu__button--open': open,
  });

  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      document.body.classList.add('no-sroll');
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove('no-sroll');
    }
  };

  return (
    <div className='mobile-menu'>
      <Logo />
      <div className={classes} onClick={handleClick}>
        <div className='mobile-menu__burger'></div>
      </div>
      <div ref={node}>
        <Sidebar open={open} />
      </div>
    </div>
  );
};

export default MenuMobile;
