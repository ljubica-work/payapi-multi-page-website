import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Input.scss';

const Input = ({
  type,
  label,
  name,
  onChange,
  value,
  error,
  onBlur,
  onFocus,
  isLoading,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const TextField = type === 'textarea' ? 'textarea' : 'input';

  const textFieldClasses = cx({
    input__field: true,
    'input__field--textarea': type === 'textarea',
  });

  const labelClasses = cx({
    input__label: true,
    'input__label--floating': isFocused || value.length > 0,
  });

  const inputClasses = cx({
    input: true,
    'input--active': isFocused || (value.length > 0 && !error),
    'input--error': error,
    'input--disabled': isLoading,
  });

  return (
    <>
      <div className={inputClasses}>
        <TextField
          type={type}
          className={textFieldClasses}
          onFocus={() => {
            onFocus(name);
            setIsFocused(true);
          }}
          onBlur={(e) => {
            onBlur(name, e.target.value);
            setIsFocused(false);
          }}
          onChange={onChange}
          name={name}
          value={value}
          autoComplete='off'
          disabled={isLoading}
        />
        <label className={labelClasses}>{label}</label>
        <span className='input__error'>{error}</span>
      </div>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Input;
