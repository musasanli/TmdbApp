import React from 'react';

import './FutureMovies.scss';

export const FutureMovies = () => {
  const handleClick = () => {
    console.log('future movies');
  };
  return (
    <div className="FutureMovies">
      <button onClick={handleClick}>fetchFilm</button>
    </div>
  );
};
