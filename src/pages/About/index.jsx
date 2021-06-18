import React from 'react';

import Layout from '../../components/Layout';
import Infographic from '../../components/Infographic';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Contact from '../../components/Contact';

import './About.scss';

const content = [
  {
    title: 'Our Vision',
    text: 'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. ',
  },
  {
    title: 'Our Business',
    text: 'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. ',
  },
  {
    title: 'The Culture',
    text: "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
  },
  {
    title: 'The People',
    text: "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
  },
];

const About = () => {
  const renderText = (start, end) => {
    return content.slice(start, end).map((item) => (
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
        {renderText(0, 2)}
        <div className='about__image'></div>
        <Infographic className='about__infographic' />
        {renderText(2, 4)}
        <Contact title='Ready to start?' size='smaller' />
      </div>
    </Layout>
  );
};

export default About;
