import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Popup.scss';

const Popup = ({ text, popup, setIsPopupVisible }) => {
  const classes = cx({
    popup: true,
    'popup--active': popup,
  });
  return (
    <div className={classes} onClick={() => setIsPopupVisible(false)}>
      <span>{text}</span>
    </div>
  );
};

Popup.propTypes = {
  text: PropTypes.string,
  popup: PropTypes.bool,
  setIsPopupVisible: PropTypes.func,
};

export default Popup;
