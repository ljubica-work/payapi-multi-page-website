import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Popup.scss';

const Popup = ({ text, popup }) => {
  const classes = cx({
    popup: true,
    'popup--active': popup,
  });
  return (
    <div className={classes}>
      <span>{text}</span>
    </div>
  );
};

Popup.propTypes = {
  text: PropTypes.string,
  popup: PropTypes.bool,
};

export default Popup;
