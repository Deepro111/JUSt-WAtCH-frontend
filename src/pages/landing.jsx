import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Features from '../components/features';
import Footer from '../components/footer';
import './landing.css'

const Landing = () => {
  return (
    <>
    <div className="landing-overlay"></div>
    <div className="landing">
      <Navbar />        {/* Moved outside */}
      <Hero />
      <Features />
      <Footer />
    </div>
    </>
    
  );
};

export default Landing;
