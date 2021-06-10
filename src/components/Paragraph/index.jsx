import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import './Paragraph.scss';

const Paragraph = ({className, text, alignment}) => {
  const classes = cx({
    'paragraph' : true,
    [className]: true,
    'paragraph--center' : alignment === 'center',
    'paragraph--left' : alignment === 'left'
  });
  
  return(
    <div className={classes}>
      <p className='paragraph__text'>
        {text}
      </p>
    </div>
  );
}

Paragraph.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  alignment: PropTypes.string
}


export default Paragraph;