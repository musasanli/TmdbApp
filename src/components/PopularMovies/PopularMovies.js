import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { MovieItemView } from '../Movies/MovieItem/index';

import './PopularMovies.scss';

export const PopularMovies = ({
  getPopularMovies,
  popularMovies,
  isPopularMoviesLoading,
}) => {
  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);

  const display = () => {
    if (isPopularMoviesLoading) {
      return <p>Spinner</p>;
    }
    return (
      <div className="PopularMovies">
        {popularMovies?.map((element, i) => (
          <MovieItemView key={`movie-${i}`} data={element} />
        ))}
      </div>
    );
  };

  return (
    <div className="PopularMoviesContainer">
      <h2>Popular Movies</h2>
      {display()}
    </div>
  );
};

PopularMovies.propTypes = {
  popularMovies: PropTypes.array,
  getPopularMovies: PropTypes.func,
  isPopularMoviesLoading: PropTypes.bool,
};
