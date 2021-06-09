import React from 'react';
import PropTypes from 'prop-types';

import './Paragraph.scss';

const Paragraph = ({className}) => {
  return(
    <div className={`paragraph ${className}`}>
      <p className='paragraph__text'>
        Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. 
      </p>
    </div>
  );
}

Paragraph.propTypes = {
  className: PropTypes.string
}


export default Paragraph;