import React, { useCallback, useEffect, useRef, useState } from 'react';
import cx from 'classnames';

import Sidebar from '../Sidebar';

import { ReactComponent as Logo } from '../../assets/svg/logo-dark.svg';

import './MenuMobile.scss';

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  const sidebarRef = useRef();
  const menuButtonRef = useRef();

  const handleClick = useCallback(
    (e) => {
      if (
        sidebarRef.current.contains(e.target) ||
        menuButtonRef.current === e.target
      ) {
        return;
      }
      if (open) {
        setOpen(false);
      }
    },
    [open],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

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
      <div
        ref={menuButtonRef}
        className={classes}
        onClick={() => setOpen(!open)}
      >
        <div className='mobile-menu__burger'></div>
      </div>
      <div ref={sidebarRef}>
        <Sidebar open={open} />
      </div>
    </div>
  );
};

export default MenuMobile;
