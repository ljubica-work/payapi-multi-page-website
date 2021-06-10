import React from 'react';
import Title from '../Title';
import Paragraph from '../Paragraph';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './ComboLG.scss';

import { ReactComponent as Codescreen} from '../../assets/svg/code-screen.svg';
import { ReactComponent as Iphonemockup } from '../../assets/svg/iphone-mockup.svg';


const ComboLG = ({type, reverse}) => {

  let classes = cx({
    'combolg': true,
    'combolg--reverse' : reverse
  });

  let titleText = (type === 'code') ? 'Easy to implement' : 'Simple UI & UX';
  let paragraphText = (type === 'code') ? 'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.' : 'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.';
  
  return (
    <div className={classes}>
      {type === 'code' ? <Codescreen className='combolg__image' /> : <Iphonemockup className='combolg__image' />}
      <div className='combolg__content'>
        <Title className='combolg__title' text={titleText}/>
        <Paragraph className='combolg_paragraph' text={paragraphText}/>
      </div>
    </div>
  );

}

ComboLG.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool
}

export default ComboLG;