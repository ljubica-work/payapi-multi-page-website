import React from 'react';

import Layout from '../../components/Layout';
import Infographic from '../../components/Infographic';

import './About.scss';

const About = () => {
  return (
    <Layout>
      <div className='about'>
        <Infographic />
      </div>
    </Layout>
  );
};

export default About;
