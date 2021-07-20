import React, { useState, createRef, useEffect } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';

import './Tooltip.scss';

const Tooltip = ({
  coordinates,
  visible,
  className,
  text,
  position,
  setVisible,
  tooltipStyles,
  setTooltipStyles,
}) => {
  const [tooltipPosition, setTooltipPosition] = useState(position);
  const classes = cx({
    tooltip: true,
    [className]: className,
    'tooltip--visible': visible,
    'tooltip--top': tooltipPosition === 'top',
    'tooltip--bottom': tooltipPosition === 'bottom',
    'tooltip--left': tooltipPosition === 'left',
    'tooltip--right': tooltipPosition === 'right',
  });

  const tooltipRef = createRef();

  const setTooltipBottom = (tooltipCoordinats) => {
    setTooltipStyles({
      top: `${coordinates.y + coordinates.height + 10}px`,
      left: `${
        coordinates.x + coordinates.width / 2 - tooltipCoordinats.width / 2
      }px`,
    });
    setTooltipPosition('bottom');
  };

  const setTooltipTop = (tooltipCoordinats) => {
    setTooltipStyles({
      top: `${coordinates.y - tooltipCoordinats.height - 10}px`,
      left: `${
        coordinates.x + coordinates.width / 2 - tooltipCoordinats.width / 2
      }px`,
    });
    setTooltipPosition('top');
  };

  const setTooltipLeft = (tooltipCoordinats) => {
    setTooltipStyles({
      top: `${
        +coordinates.y + coordinates.height / 2 - tooltipCoordinats.height / 2
      }px`,
      left: `${coordinates.x - tooltipCoordinats.width - 20}px`,
    });
    setTooltipPosition('left');
  };

  const setTooltipRight = (tooltipCoordinats) => {
    setTooltipStyles({
      top: `${
        +coordinates.y + coordinates.height / 2 - tooltipCoordinats.height / 2
      }px`,
      left: `${+coordinates.x + +coordinates.width + 20}px`,
    });
    setTooltipPosition('right');
  };

  useEffect(() => {
    const tooltipCoordinats = tooltipRef.current.getBoundingClientRect();
    if (position) {
      if (position === 'top') {
        if (coordinates.y < tooltipCoordinats.height + 10) {
          setTooltipBottom(tooltipCoordinats);
        } else {
          setTooltipTop(tooltipCoordinats);
        }
      } else if (position === 'left') {
        if (coordinates.x < tooltipCoordinats.width + 10) {
          setTooltipBottom(tooltipCoordinats);
        } else {
          setTooltipLeft(tooltipCoordinats);
        }
      } else if (position === 'right') {
        if (
          coordinates.x + coordinates.width >=
          window.innerWidth - tooltipCoordinats.width
        ) {
          setTooltipBottom(tooltipCoordinats);
        } else {
          setTooltipRight(tooltipCoordinats);
        }
      } else {
        if (
          coordinates.y + coordinates.height >
          window.innerHeight - (tooltipCoordinats.height + 10)
        ) {
          setTooltipTop(tooltipCoordinats);
        } else {
          setTooltipBottom(tooltipCoordinats);
        }
      }
    } else {
      setTooltipBottom(tooltipCoordinats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (visible) {
        setVisible(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Portal>
      <div className={classes} style={tooltipStyles} ref={tooltipRef}>
        <span className='tooltip__text'>{text}</span>
      </div>
    </Portal>
  );
};

Tooltip.propTypes = {
  className: PropTypes.string,
  coordinates: PropTypes.object,
  visible: PropTypes.bool,
  text: PropTypes.string,
  position: PropTypes.string,
  setVisible: PropTypes.func,
  tooltipStyles: PropTypes.object,
  setTooltipStyles: PropTypes.func,
};

export default Tooltip;
