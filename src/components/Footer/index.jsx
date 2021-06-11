import React from 'react';

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
          <Logo className='footer__logo' />
          <ul className='footer__list'>
            <li className='footer__list-item'>
              <a href='https://www.google.com/' className='footer__link'>
                Pricing
              </a>
            </li>
            <li className='footer__list-item'>
              <a href='https://www.google.com/' className='footer__link'>
                About
              </a>
            </li>
            <li className='footer__list-item'>
              <a href='https://www.google.com/' className='footer__link'>
                Contact
              </a>
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
