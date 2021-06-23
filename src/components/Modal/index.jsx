import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = ({
  className,
  setIsModalOpen,
  formData,
  modalRef,
  resetFormData,
}) => {
  const renderModalData = () => {
    return Object.keys(formData).map((key) => (
      <div className='modal__item' key={key}>
        <h3 className='modal__item-title'>{key}:</h3>
        <h3 className='modal__item-data'>
          {key === 'newsletter' && formData[key] === true
            ? 'Yes'
            : key === 'newsletter' && formData[key] === false
            ? 'No'
            : formData[key]}
        </h3>
      </div>
    ));
  };

  const handleClick = () => {
    resetFormData();
    setIsModalOpen(false);
  };
  return (
    <div className={className}>
      <div className='modal__box' ref={modalRef}>
        <button className='modal__close-button' onClick={handleClick}>
          <span className='modal__close-sign'></span>
        </button>
        <h1 className='modal__title'>Thank you for contacting us.</h1>
        {renderModalData()}
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  setIsModalOpen: PropTypes.func,
  formData: PropTypes.object,
  isModalOpen: PropTypes.bool,
  modalRef: PropTypes.object,
  resetFormData: PropTypes.func,
};

export default Modal;
