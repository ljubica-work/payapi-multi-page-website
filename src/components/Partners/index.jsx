import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as TeslaWhite } from '../../assets/svg/tesla-white.svg';
import { ReactComponent as MicrosoftWhite } from '../../assets/svg/microsoft-white.svg';
import { ReactComponent as HpWhite } from '../../assets/svg/hp-white.svg';
import { ReactComponent as OracleWhite } from '../../assets/svg/oracle-white.svg';
import { ReactComponent as GoogleWhite } from '../../assets/svg/google-white.svg';
import { ReactComponent as NvidiaWhite } from '../../assets/svg/nvidia-white.svg';
import { ReactComponent as TeslaBlack } from '../../assets/svg/tesla-black.svg';
import { ReactComponent as MicrosoftBlack } from '../../assets/svg/microsoft-black.svg';
import { ReactComponent as HpBlack } from '../../assets/svg/hp-black.svg';
import { ReactComponent as OracleBlack } from '../../assets/svg/oracle-black.svg';
import { ReactComponent as GoogleBlack } from '../../assets/svg/google-black.svg';
import { ReactComponent as NvidiaBlack } from '../../assets/svg/nvidia-black.svg';

import './Partners.scss';

const Partners = ({ className, imageColor }) => {
  return (
    <div className={`partners ${className}`}>
      {imageColor === 'dark' ? (
        <TeslaBlack className='partners__image' />
      ) : (
        <TeslaWhite className='partners__image' />
      )}
      {imageColor === 'dark' ? (
        <MicrosoftBlack className='partners__image' />
      ) : (
        <MicrosoftWhite className='partners__image' />
      )}
      {imageColor === 'dark' ? (
        <HpBlack className='partners__image' />
      ) : (
        <HpWhite className='partners__image' />
      )}
      {imageColor === 'dark' ? (
        <OracleBlack className='partners__image' />
      ) : (
        <OracleWhite className='partners__image' />
      )}
      {imageColor === 'dark' ? (
        <GoogleBlack className='partners__image' />
      ) : (
        <GoogleWhite className='partners__image' />
      )}
      {imageColor === 'dark' ? (
        <NvidiaBlack className='partners__image' />
      ) : (
        <NvidiaWhite className='partners__image' />
      )}
    </div>
  );
};

Partners.propTypes = {
  className: PropTypes.string,
  imageColor: PropTypes.string,
};

export default Partners;
