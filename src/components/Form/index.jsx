import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import formValidation from '../../helpers/formValidation.js';

import formInfo from './data';

import Checkbox from '../Checkbox';
import Button from '../Button';
import Input from '../Input';

import './Form.scss';

const LOAD_DURATION = 2000;

const Form = ({ className, formData, setFormData, setIsModalOpen }) => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const classes = cx({
    form: true,
    [className]: true,
  });

  const load = () => {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
      setIsModalOpen(true);
    }, LOAD_DURATION);
  };

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const validateInputs = () => {
    let tmpErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = formValidation(key, formData[key]);
      if (error) {
        tmpErrors[key] = error;
      }
    });
    setErrors(tmpErrors);
    if (Object.values(tmpErrors).length) {
      return false;
    }
    return true;
  };

  const handleBlur = (name, value) => {
    setErrors({
      ...errors,
      [name]: formValidation(name, value),
    });
  };

  const handleFocus = (name) => {
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      load();
    }
  };

  const renderInputs = () => {
    return formInfo.map((input) => (
      <Input
        type={input.type}
        label={input.label}
        name={input.name}
        onChange={handleChange}
        key={input.name}
        value={formData[input.name]}
        error={errors[input.name]}
        onBlur={handleBlur}
        onFocus={handleFocus}
        isLoading={isLoading}
      />
    ));
  };
  return (
    <form onSubmit={handleSubmit} className={classes}>
      {renderInputs()}
      <Checkbox
        label='Stay up-to-date with company announcements and updates to our API'
        checked={formData.newsletter}
        setChecked={handleChange}
        name='newsletter'
        disabled={isLoading}
      />
      <Button
        text='Submit'
        type='dark'
        className='form__button'
        isLoading={isLoading}
      />
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  setIsModalOpen: PropTypes.func,
};

export default Form;
