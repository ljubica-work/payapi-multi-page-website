import React, { useCallback, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import Sidebar from '../Sidebar';

import { ReactComponent as Logo } from '../../assets/svg/logo-dark.svg';

import './MenuMobile.scss';

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  const sidebarRef = useRef();
  const menuButtonRef = useRef();

  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      document.body.classList.add('no-sroll');
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove('no-sroll');
    }
  };

  const handleOutsideClick = useCallback(
    (e) => {
      if (
        sidebarRef.current.contains(e.target) ||
        menuButtonRef.current === e.target
      ) {
        return;
      }
      if (open) {
        setOpen(false);
        document.body.classList.remove('no-sroll');
      }
    },
    [open],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const classes = cx({
    'mobile-menu__button': true,
    'mobile-menu__button--open': open,
  });

  return (
    <div className='mobile-menu'>
      <Link to={routes.HOME}>
        <Logo />
      </Link>
      <button ref={menuButtonRef} className={classes} onClick={handleClick}>
        <span className='mobile-menu__burger'></span>
      </button>
      <div ref={sidebarRef}>
        <Sidebar open={open} />
      </div>
    </div>
  );
};

export default MenuMobile;
