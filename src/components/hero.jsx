import React, { useState } from 'react';
import './hero.css';
import SignUpModal from '../components/SignUpModal';

const Hero = () => {

    const [showModal, setShowModal] = useState(false);

    return (
    <section className="hero">
      <div className="hero-content">
        <h1>Waiting for What? JUSt Start Your WAtCH.</h1>
        <p>Play your favourite, sit with your Popcorns</p>
        <button onClick={() => setShowModal(true)} className="cta-btn">
          WATCH FREE FOR 30 DAYS
        </button>
      </div>

      <SignUpModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Hero;