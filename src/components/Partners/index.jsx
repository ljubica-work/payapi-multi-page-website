import React from 'react';

import './Partners.scss';


const Partners = ({className, imageColor}) => {
  return (
    <div className={`partners ${className}`}>
        <img src={`images/tesla-${imageColor}.svg`} alt='' className='partners__image' />
        <img src={`images/microsoft-${imageColor}.svg`} alt='' className='partners__image' />
        <img src={`images/hp-${imageColor}.svg`} alt='' className='partners__image' />
        <img src={`images/oracle-${imageColor}.svg`} alt='' className='partners__image' />
        <img src={`images/google-${imageColor}.svg`} alt='' className='partners__image' />
        <img src={`images/nvidia-${imageColor}.svg`} alt='' className='partners__image' />
    </div>
  );
}


export default Partners;