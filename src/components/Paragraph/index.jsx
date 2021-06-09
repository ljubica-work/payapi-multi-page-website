import React from 'react';
import PropTypes from 'prop-types';

import './Paragraph.scss';

const Paragraph = ({className, text}) => {
  return(
    <div className={`paragraph ${className}`}>
      <p className='paragraph__text'>
        {text}
      </p>
    </div>
  );
}

Paragraph.propTypes = {
  className: PropTypes.string
}


export default Paragraph;