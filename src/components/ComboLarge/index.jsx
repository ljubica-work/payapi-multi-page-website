import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Title from '../Title';
import Paragraph from '../Paragraph';

import Codescreen from '../../assets/svg/code-screen.svg';
import Iphonemockup from '../../assets/svg/iphone-mockup.svg';

import './ComboLarge.scss';

const IMAGES = {
  code: Codescreen,
  iphone: Iphonemockup,
};

const ComboLarge = ({ type, reverse, title, text }) => {
  const classes = cx({
    'combo-large': true,
    'combo-large--reverse': reverse,
  });

  const Image = IMAGES[type];

  return (
    <div className={classes}>
      <img src={Image} alt='Iphone' className='combo-large__image' />
      <div className='combo-large__content'>
        <Title className='combo-large__title' text={title} />
        <Paragraph
          className='combo-large_paragraph'
          text={text}
          alignment='left'
        />
      </div>
    </div>
  );
};

ComboLarge.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default ComboLarge;
