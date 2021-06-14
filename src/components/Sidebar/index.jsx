import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../Button';

import './Sidebar.scss';

const Sidebar = ({ open }) => {
  const classes = cx({
    sidebar: true,
    'sidebar--open': open === true,
  });
  return (
    <div className={classes}>
      <div className='sidebar__divider'></div>
      <ul>
        <li className='sidebar__list-item'>
          <a href='https://www.google.com/'>Pricing</a>
        </li>
        <li className='sidebar__list-item'>
          <a href='https://www.google.com/'>About</a>
        </li>
        <li className='sidebar__list-item'>
          <a href='https://www.google.com/'>Contact</a>
        </li>
      </ul>
      <Button text='Schedule a Demo' className='sidebar__button' />
    </div>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
};

export default Sidebar;
