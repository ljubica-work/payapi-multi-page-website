import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

import Circle from '../Circle';

import { ReactComponent as Facebook } from '../../assets/svg/fb-icon.svg';
import { ReactComponent as Twitter } from '../../assets/svg/tw-icon.svg';
import { ReactComponent as Linkedin } from '../../assets/svg/in-icon.svg';
import { ReactComponent as Logo } from '../../assets/svg/logo-light.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <Circle className='footer__circle' />
      <div className='footer__wrapper'>
        <div className='footer__menu'>
          <Link to={routes.HOME}>
            <Logo className='footer__logo' />
          </Link>
          <ul className='footer__list'>
            <li className='footer__list-item'>
              <Link to={routes.PRICING} className='footer__link'>
                Pricing
              </Link>
            </li>
            <li className='footer__list-item'>
              <Link to={routes.ABOUT} className='footer__link'>
                About
              </Link>
            </li>
            <li className='footer__list-item'>
              <Link to={routes.CONTACT} className='footer__link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className='footer__icons'>
          <a href='https://www.google.com/'>
            <Facebook className='footer__icon' />
          </a>
          <a href='https://www.google.com/'>
            <Twitter className='footer__icon' />
          </a>
          <a href='https://www.google.com/'>
            <Linkedin className='footer__icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
