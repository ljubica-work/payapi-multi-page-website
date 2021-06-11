import React from 'react';

import Card from '../Card';

import { ReactComponent as Finances } from '../../assets/svg/finance.svg';
import { ReactComponent as Banking } from '../../assets/svg/banking.svg';
import { ReactComponent as Payments } from '../../assets/svg/payments.svg';

import './ComboSmall.scss';

const ComboSmall = () => {
  return (
    <div className='combo-small'>
      <Card
        image={<Finances className='card__image' />}
        title='Personal Finances'
        text='Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. '
      />
      <Card
        image={<Banking className='card__image' />}
        title='Banking & Coverage'
        text='With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.'
      />
      <Card
        image={<Payments className='card__image' />}
        title='Concumer Payments'
        text='It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.'
      />
    </div>
  );
};

export default ComboSmall;
