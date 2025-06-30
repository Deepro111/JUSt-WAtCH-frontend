import React from 'react';
import './dashboard.css';
import Sidebar from '../components/sidebar';
import HeroBanner from '../components/heroBanner';
import MovieRow from '../components/movieRow';

const Dashboard = () => {
  // You can later get this from API
  const continueWatching = [
    { title: 'The Batman', poster: '../assets/poster.png' },
    { title: 'Pulp Fiction', poster: '../assets/poster.png' },
    { title: 'The Irishman', poster: '../assets/poster.png' },
    { title: 'Multiverse Madness', poster: '../assets/poster.png' },
  ];

  const popularMovies = [
    { title: 'Loki', poster: '/assets/poster.png' },
    { title: 'Breaking Bad', poster: '/assets/poster.png' },
    { title: 'Spiderman', poster: '/assets/spiderman.jpg' },
    { title: 'Everything Everywhere', poster: '/assets/poster.png' },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <h2 className="section-heading">Featured</h2>
        <HeroBanner />

        {continueWatching.length > 0 && (
          <>
            <h2 className="section-heading">Continue Watching</h2>
            <MovieRow movies={continueWatching} />
          </>
        )}

        <h2 className="section-heading">Popular</h2>
        <MovieRow movies={popularMovies} />
      </div>
    </div>
  );
};

export default Dashboard;
