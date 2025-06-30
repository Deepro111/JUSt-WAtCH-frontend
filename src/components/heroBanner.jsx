import React from 'react';
import './heroBanner.css';
import duneBanner from '../assets/bg.avif'; // Replace with actual path

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img src={duneBanner} alt="Dune" className="banner-image" />
      <div className="banner-details">
        <h1>Dune</h1>
        <p className="meta">2021 • PG-18 • 2h 55m</p>
        <p className="description">
          A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.
        </p>
        <button className="watch-btn">Watch Now</button>
      </div>
    </div>
  );
};

export default HeroBanner;