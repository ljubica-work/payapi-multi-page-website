import React from 'react';
import PropTypes from 'prop-types';

import MenuMobile from '../MenuMobile';
import MenuDesktop from '../MenuDesktop';
import Footer from '../Footer';

import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <MenuMobile />
      <MenuDesktop />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
