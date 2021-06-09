import React from 'react';

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


export default Paragraph;