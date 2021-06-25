import React from 'react';

import pricingData from './data';

import Layout from '../../components/Layout';
import OfferColumn from '../../components/OfferColumn';
import Title from '../../components/Title';
import Contact from '../../components/Contact';

import './Pricing.scss';

const Pricing = () => {
  const renderOfferColumns = () => {
    return pricingData.map((plan) => (
      <OfferColumn
        plan={plan}
        className='pricing__offer-column'
        key={plan.title}
      />
    ));
  };
  return (
    <Layout>
      <div className='pricing'>
        <div className='pricing--inner'>
          <Title text='Pricing' className='pricing__title' size='smaller' />
          <div className='pricing__offer-columns'>{renderOfferColumns()}</div>
        </div>
      </div>
      <Contact size='smaller' title='Ready to start?' />
    </Layout>
  );
};

export default Pricing;
