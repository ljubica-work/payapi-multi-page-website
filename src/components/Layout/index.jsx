import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MenuMobile from '../MenuMobile';
import MenuDesktop from '../MenuDesktop';
import Footer from '../Footer';
import Popup from '../Popup';

import './Layout.scss';

const Layout = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      setIsPopupVisible: setIsPopupVisible,
    }),
  );
  return (
    <div className='layout'>
      <Popup
        text='Thank you for scheduling a demo. We will get in touch with you soon.'
        popup={isPopupVisible}
        setIsPopupVisible={setIsPopupVisible}
      />
      <MenuMobile />
      <MenuDesktop />
      {childrenWithProps}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
