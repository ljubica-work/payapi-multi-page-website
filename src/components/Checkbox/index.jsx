import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Checkbox.scss';

const Checkbox = ({ label, disabled, checked, setChecked, name }) => {
  const classes = cx({
    checkbox__label: true,
    'checkbox__label--disabled': disabled,
  });

  return (
    <div className='checkbox'>
      <label className={classes}>
        {label}
        <input
          type='checkbox'
          className='checkbox__input'
          onChange={setChecked}
          disabled={disabled}
          checked={checked}
          name={name}
        />
        <span className='checkbox__checkmark'></span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
  name: PropTypes.string,
};

export default Checkbox;
