import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { MovieItemView } from 'components/Movies/MovieItem/index';
import { Spinner } from 'components/common/Spinner/Spinner';

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
      return (
        <div data-testid="popular_page_spinner">
          <Spinner />
        </div>
      );
    }
    return (
      <div className="PopularMovies" data-testid="popular_movies">
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
