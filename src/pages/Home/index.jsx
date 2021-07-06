import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import ComboLarge from '../../components/ComboLarge';
import ComboSmall from '../../components/ComboSmall';
import ContactComponent from '../../components/ContactComponent';
import Layout from '../../components/Layout';
import Circle from '../../components/Circle';

import './Home.scss';

const Home = () => {
  return (
    <Layout className='home__layout'>
      <Header />
      <Banner />
      <ComboLarge
        type='code'
        title='Easy to implement'
        text='Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.'
      />
      <div className='home__circle-bottom-wrapper'>
        <Circle className='home__circle--bottom' />
      </div>
      <ComboLarge
        type='iphone'
        title='Simple UI & UX'
        text='Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.'
        reverse
      />
      <ComboSmall />
      <ContactComponent
        size='smaller'
        title='Ready to start?'
        className='home__contact'
      />
    </Layout>
  );
};

export default Home;
