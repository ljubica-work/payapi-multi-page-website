import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Input.scss';

const Input = ({ type, label }) => {
  const [inputState, setInputState] = useState('normal');
  const [labelState, setLabelState] = useState('normal');
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const TextField = type === 'textarea' ? 'textarea' : 'input';

  const textFieldClasses = cx({
    input__field: true,
    'input__field--textarea': type === 'textarea',
  });

  const labelClasses = cx({
    input__label: true,
    'input__label--floating': labelState === 'floating',
  });

  const inputClasses = cx({
    input: true,
    'input--active': inputState === 'active',
    'input--error': inputState === 'error',
  });

  function onBlur(e) {
    if (!e.target.value) {
      setLabelState('normal');
    }
    validateInput();
  }

  const validateInput = () => {
    if (!inputValue) {
      setInputState('error');
      setMessage("This field can't be empty");
    } else if (type === 'email') {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      );
      if (!pattern.test(inputValue)) {
        setInputState('error');
        setMessage('Enter a valid email adress');
      } else {
        setInputState('normal');
      }
    } else {
      setInputState('normal');
    }
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFocus = () => {
    setInputState('active');
    setLabelState('floating');
    setMessage('');
  };

  return (
    <>
      <div className={inputClasses}>
        <TextField
          type={type}
          className={textFieldClasses}
          onFocus={onFocus}
          onBlur={(e) => onBlur(e)}
          onChange={(e) => onChange(e)}
        />
        <label className={labelClasses}>{label}</label>
        <span className='input__error'>{message}</span>
      </div>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
};

export default Input;
