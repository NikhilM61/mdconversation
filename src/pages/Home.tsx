import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { RecentProjects } from '../components/RecentProjects';
import { LatestArticles } from '../components/LatestArticles';
import { Founders } from '../components/Founders';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Sponsors } from '../components/Sponsors';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <RecentProjects />
      <LatestArticles />
      <Founders />
      <Testimonials />
      <Contact />
      <Sponsors />
    </>
  );
};