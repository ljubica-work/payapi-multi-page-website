import React from 'react';
import Banner from './components/Banner';
import ComboLG from './components/ComboLG';

import './styles/index.scss';

const  App = () => {
  return (
    <div className='app'>
      <Banner />
      <ComboLG type='code'/>
      <ComboLG type='iphone' reverse/>
    </div>
  );
}

export default App;
