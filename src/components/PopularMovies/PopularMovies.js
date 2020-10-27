import React from 'react';

import './PopularMovies.scss';

export const PopularMovies = () => {
  const handleClick = () => {
    console.log('PopularMovies');
  };

  return (
    <div className="PopularMovies">
      <button onClick={handleClick}>fetchFilm</button>
    </div>
  );
};
