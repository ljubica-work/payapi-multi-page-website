import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import formValidation from '../../helpers/formValidation';

import Title from '../Title';
import Button from '../Button';

import './ContactComponent.scss';

const POPUP_DURATION = 4000;
const LOADER_DURATION = 2000;

const Contact = ({ text, size, title, setIsPopupVisible, className }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isValid = () => {
    if (formValidation('email', email)) {
      setMessage(formValidation('email', email));
      return false;
    } else {
      setMessage('');
      return true;
    }
  };

  const showPopup = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, POPUP_DURATION);
  };

  const load = () => {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
      setEmail('');
      showPopup();
    }, LOADER_DURATION);
  };

  const handleClick = () => {
    if (isValid()) {
      load();
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
    setMessage('');
  };

  const classes = cx({
    contact: true,
    'contact--smaller': size === 'smaller',
    'contact--larger': size === 'larger',
    [className]: className,
  });

  const inputClasses = cx({
    contact__input: true,
    'contact__input--disabled': isLoading,
  });

  return (
    <div className={classes}>
      <Title text={title} className='contact__title' size={size} />
      <div className='contact__wrapper'>
        <div className='contact__group'>
          <input
            type='text'
            className={inputClasses}
            placeholder='Enter email adress'
            onChange={(e) => {
              handleOnChange(e);
            }}
            value={email}
            disabled={isLoading}
          />
          <Button
            text='Schedule a Demo'
            className='contact__button'
            type='primary'
            onclick={handleClick}
            isLoading={isLoading}
          />
        </div>
        <span className='contact__message contact__message--error'>
          {message}
        </span>
        <span className='contact__message contact__message--gray'>
          {text === undefined ? '' : text}
        </span>
      </div>
    </div>
  );
};

Contact.propTypes = {
  text: PropTypes.array,
  size: PropTypes.string,
  title: PropTypes.string,
  setIsPopupVisible: PropTypes.func,
  className: PropTypes.string,
};

export default Contact;
