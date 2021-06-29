import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import MenuMobile from '../MenuMobile';
import MenuDesktop from '../MenuDesktop';
import Footer from '../Footer';
import Popup from '../Popup';
import Circle from '../Circle';

import './Layout.scss';

const Layout = ({ children, className }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      setIsPopupVisible: setIsPopupVisible,
    }),
  );

  const circleClass = cx({
    'circle--bigger': className === 'home__layout',
    'circle--basic': !className,
  });
  return (
    <div className='layout'>
      <Popup
        text='Thank you for scheduling a demo. We will get in touch with you soon.'
        popup={isPopupVisible}
        setIsPopupVisible={setIsPopupVisible}
      />
      <MenuMobile />
      <MenuDesktop />
      <Circle className={circleClass} />
      {childrenWithProps}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Layout;
