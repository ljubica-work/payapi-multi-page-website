import React, { useState, useEffect, useRef, useCallback } from 'react';
import cx from 'classnames';

import Layout from '../../components/Layout';
import Form from '../../components/Form';
import Title from '../../components/Title';
import Partners from '../../components/Partners';
import ContactComponent from '../../components/ContactComponent';
import Modal from '../../components/Modal';

import './Contact.scss';

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: '',
    newsletter: false,
  });
  const modalRef = useRef();

  const resetFormData = () => {
    const emptyData = {
      name: '',
      email: '',
      company: '',
      title: '',
      message: '',
      newsletter: false,
    };
    setFormData(emptyData);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-sroll');
    } else {
      document.body.classList.remove('no-sroll');
    }
  }, [isModalOpen]);

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current.contains(e.target)) {
        return;
      }
      if (isModalOpen) {
        setIsModalOpen(false);
        document.body.classList.remove('no-sroll');
        resetFormData();
      }
    },
    [isModalOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const modalClasses = cx({
    modal: true,
    'modal--open': isModalOpen,
  });
  return (
    <Layout>
      <Modal
        className={modalClasses}
        setIsModalOpen={setIsModalOpen}
        formData={formData}
        setFormData={setFormData}
        modalRef={modalRef}
        resetFormData={resetFormData}
      />
      <div className='contact-page'>
        <Title
          text='Submit a help request and we’ll get in touch shortly.'
          className='contact-page__title'
          size='smaller'
        />
        <div className='contact-page__content-wrapper'>
          <Form
            className='contact-page__form'
            formData={formData}
            setFormData={setFormData}
            setIsModalOpen={setIsModalOpen}
          />
          <div className='contact-page__partners-wrapper'>
            <h3 className='contact-page__partners-title'>
              Join the thousands of innovators already building with us
            </h3>
            <Partners className='contact-page__partners' imageColor='dark' />
          </div>
        </div>
      </div>
      <ContactComponent title='Ready to start?' size='smaller' />
    </Layout>
  );
};

export default ContactPage;
