import React from 'react';
import './movieRow.css';

const MovieRow = ({ movies }) => {
  return (
    <div className="movie-row">
      {movies.map((movie) => (
        <div className="movie-card">
          <img src={movie.poster} alt={movie.title} className="movie-thumbnail" />
          <p className="movie-title">{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieRow;