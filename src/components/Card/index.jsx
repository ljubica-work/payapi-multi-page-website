import React from 'react';
import PropTypes from 'prop-types';

import  Paragraph from '../Paragraph';

import './Card.scss';

const Card = ({image, title, text}) => {



  return (
    <div className='card'>
      {image}
      <h3 className='card__heading'>{title}</h3>
      <Paragraph className='card__paragraph' text={text} alignment='center'/>
    </div>
  );
}


Card.propTypes = {
  image:PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string
}


export default Card;