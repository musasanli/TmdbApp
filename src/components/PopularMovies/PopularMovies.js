import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PopularMoviesItemView } from './PopularMoviesItem';

import './PopularMovies.scss';

export const PopularMovies = ({ getPopularMovies, popularMovies }) => {
  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  return (
    <div className="PopularMoviesContainer">
      <h2>Popular Movies</h2>
      <div className="PopularMovies">
        {popularMovies?.map((element, i) => (
          <PopularMoviesItemView key={`movie-${i}`} data={element} />
        ))}
      </div>
    </div>
  );
};

PopularMovies.propTypes = {
  popularMovies: PropTypes.array,
  getPopularMovies: PropTypes.func,
};
