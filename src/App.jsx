import React from 'react';
import Banner from './components/Banner';
import ComboLarge from './components/ComboLarge';
import ComboSmall from './components/ComboSmall';

import './styles/index.scss';

const  App = () => {
  return (
    <div className='app'>
      <Banner />
      <ComboLarge type='code' title='Easy to implement' text='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'/>
      <ComboLarge type='iphone' title='Simple UI & UX' text='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.' reverse/>
      <ComboSmall />
    </div>
  );
}

export default App;
