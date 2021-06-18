import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import Button from '../Button';

import './Sidebar.scss';

const Sidebar = ({ open, setOpen }) => {
  const classes = cx({
    sidebar: true,
    'sidebar--open': open,
  });
  return (
    <div className={classes}>
      <div className='sidebar__divider'></div>
      <ul>
        <li className='sidebar__list-item'>
          <Link to={routes.PRICING} onClick={() => setOpen(false)}>
            Pricing
          </Link>
        </li>
        <li className='sidebar__list-item'>
          <Link to={routes.ABOUT} onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li className='sidebar__list-item'>
          <Link to={routes.CONTACT} onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <Button
        text='Schedule a Demo'
        className='sidebar__button'
        type='primary'
        to={routes.CONTACT}
        onclick={() => setOpen(false)}
      />
    </div>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default Sidebar;
