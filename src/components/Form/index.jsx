import React, { useState } from 'react';

import Checkbox from '../Checkbox';
import Button from '../Button';

import './Form.scss';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
    newsletter: false,
  });

  function handleChange(e) {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit} className='form'>
      <Checkbox
        label='Stay up-to-date with company announcements and updates to our API'
        checked={formData.checked}
        setChecked={handleChange}
        name='newsletter'
      />
      <Button text='Submit' type='dark' className='form__button' />
    </form>
  );
};

export default Form;
