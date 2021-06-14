import React from 'react';
import Banner from './components/Banner';
import ComboLarge from './components/ComboLarge';
import ComboSmall from './components/ComboSmall';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import MenuMobile from './components/MenuMobile';

import './styles/index.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <MenuMobile />
      <Banner />
      <ComboLarge
        type='code'
        title='Easy to implement'
        text='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'
      />
      <ComboLarge
        type='iphone'
        title='Simple UI & UX'
        text='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.'
        reverse
      />
      <ComboSmall />
      <Contact size='smaller' title='Ready to start?' />
      <Footer />
    </div>
  );
};

export default App;
