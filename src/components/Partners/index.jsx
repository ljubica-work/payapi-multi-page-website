import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as TeslaWhite } from '../../assets/svg/tesla-white.svg';
import { ReactComponent as MicrosoftWhite } from '../../assets/svg/microsoft-white.svg';
import { ReactComponent as HpWhite } from '../../assets/svg/hp-white.svg';
import { ReactComponent as OracleWhite } from '../../assets/svg/oracle-white.svg';
import { ReactComponent as GoogleWhite } from '../../assets/svg/google-white.svg';
import { ReactComponent as NvidiaWhite } from '../../assets/svg/nvidia-white.svg';

import './Partners.scss';

const Partners = ({ className, imageColor }) => {
  return (
    <div className={`partners ${className}`}>
      <TeslaWhite className='partners__image' />
      <MicrosoftWhite className='partners__image' />
      <HpWhite className='partners__image' />
      <OracleWhite className='partners__image' />
      <GoogleWhite className='partners__image' />
      <NvidiaWhite className='partners__image' />
    </div>
  );
};

Partners.propTypes = {
  className: PropTypes.string,
  imageColor: PropTypes.string,
};

export default Partners;
