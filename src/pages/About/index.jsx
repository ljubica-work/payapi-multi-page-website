import React from 'react';

import aboutData from './data';

import Layout from '../../components/Layout';
import Infographic from '../../components/Infographic';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import ContactComponent from '../../components/ContactComponent';

import './About.scss';

const About = () => {
  const { topContent, bottomContent } = aboutData;
  const renderText = (content) => {
    return content.map((item) => (
      <div className='about__text-wrapper' key={item.text}>
        <h3 className='about__text-title'>{item.title}</h3>
        <Paragraph
          text={item.text}
          className='about__paragraph'
          alignment='left'
        />
      </div>
    ));
  };

  return (
    <Layout>
      <div className='about'>
        <div className='about__tite-wrapper'>
          <Title
            text='We empower innovators by delivering access to the financial system'
            className='about__title'
            size='smaller'
          />
        </div>
        {renderText(topContent)}
        <div className='about__image'></div>
        <Infographic className='about__infographic' />
        {renderText(bottomContent)}
      </div>
      <ContactComponent title='Ready to start?' size='smaller' />
    </Layout>
  );
};

export default About;
