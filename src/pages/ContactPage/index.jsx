import React from 'react';

import Layout from '../../components/Layout';
import Input from '../../components/Input';

import './ContactPage.scss';

const ContactPage = () => {
  return (
    <Layout>
      <Input type='text' label='Name' />
      <Input type='textarea' label='Message' />
    </Layout>
  );
};

export default ContactPage;
