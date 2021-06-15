import React, { useState } from 'react';

import Title from '../Title';
import Button from '../Button';

import './Contact.scss';

const Contact = ({ text }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isValid = () => {
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    if (!pattern.test(email)) {
      setMessage('Please enter a valid email address.');
    } else {
      setMessage('');
      setEmail('');
    }
  };

  return (
    <div className='contact'>
      <Title text='Ready to start?' className='contact__title' />
      <div className='contact__wrapper'>
        <div className='contact__group'>
          <input
            type='text'
            className='contact__input'
            placeholder='Enter email adress'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button
            text='Schedule a Demo'
            className='contact__button'
            type='primary'
            action={isValid}
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

export default Contact;
