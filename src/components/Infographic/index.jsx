import React, { useState } from 'react';
import infographicData from './data';

import Tooltip from '../Tooltip';

import './Infographic.scss';

const Infographic = () => {
  const [elementCoordinates, setElementCoordinates] = useState({});
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipStyles, setTooltipStyles] = useState({});

  const handleEnter = (e, index) => {
    const tooltipText = infographicData[index].info;
    setTooltipContent(tooltipText);
    setElementCoordinates(e.target.getBoundingClientRect());
    setIsTooltipVisible(true);
  };

  const handleLeave = () => {
    setIsTooltipVisible(false);
    setTooltipStyles({});
  };

  const renderNumberCards = () => {
    return infographicData.map((item, index) => (
      <div className='infographic__card' key={item.number}>
        <h4 className='infographic__title'>{item.title}</h4>
        <div className='infographic__number'>
          <span
            onMouseOver={(e) => handleEnter(e, index)}
            onMouseLeave={(e) => handleLeave(e)}
          >
            {item.number}
          </span>
        </div>
      </div>
    ));
  };
  return (
    <div className='infographic'>
      {renderNumberCards()}
      <Tooltip
        coordinates={elementCoordinates}
        visible={isTooltipVisible}
        setVisible={setIsTooltipVisible}
        className='infographic__tooltip'
        text={tooltipContent}
        position='bottom'
        tooltipStyles={tooltipStyles}
        setTooltipStyles={setTooltipStyles}
      />
    </div>
  );
};

export default Infographic;
