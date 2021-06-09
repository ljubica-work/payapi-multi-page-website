import React from 'react';
import Title from '../Title';
import Paragraph from '../Paragraph';
import cx from 'classnames';

import './ComboLG.scss';

import codescreen from '../../assets/images/code-screen.png';
import iphonemockup from '../../assets/images/iphone-mockup.png';

const ComboLG = ({type, reverse}) => {

  let classes = cx({
    'combolg': true,
    'combolg--reverse' : reverse
  });

  let titleText = (type === 'code') ? 'Easy to implement' : 'Simple UI & UX';
  let paragraphText = (type === 'code') ? 'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.' : 'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.';
  let image = (type === 'code') ? codescreen : iphonemockup;
  
  return (
    <div className={classes}>
      <img src={image} alt='' className='combolg__image'/>
      <div className='combolg__content'>
        <Title className='combolg__title' text={titleText}/>
        <Paragraph className='combolg_paragraph' text={paragraphText}/>
      </div>
    </div>
  );

}

export default ComboLG;