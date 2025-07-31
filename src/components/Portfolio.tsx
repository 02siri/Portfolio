import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen **:text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio; 