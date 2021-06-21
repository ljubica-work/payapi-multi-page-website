import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ type, label }) => {
  const [state, setState] = useState('normal');
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const validateInput = () => {
    if (!inputValue) {
      setState('error');
      setMessage("Field can't be empty");
    }
  };
  return (
    <>
      <div className={`input input--${state}`}>
        <input
          type={type}
          className='input__field'
          onFocus={() => setState('active')}
          onBlur={validateInput}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label className='input__label'>{label}</label>
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
