import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { MovieItemView } from '../Movies/MovieItem/index';

import './UpcomingMovies.scss';

export const UpcomingMovies = ({
  getUpcomingMovies,
  upcomingMovies,
  isUpcomingMoviesLoading,
}) => {
  useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);

  const display = () => {
    if (isUpcomingMoviesLoading) {
      return <p data-testid="upcoming_page_spinner">Spinner</p>;
    }
    return (
      <div className="UpcomingMovies" data-testid="upcoming_movies">
        {upcomingMovies?.map((element, i) => (
          <MovieItemView key={`movie-${i}`} data={element} />
        ))}
      </div>
    );
  };

  return (
    <div className="UpcomingMoviesContainer">
      <h2>Upcoming Movies</h2>
      {display()}
    </div>
  );
};

UpcomingMovies.propTypes = {
  upcomingMovies: PropTypes.array,
  getUpcomingMovies: PropTypes.func,
  isUpcomingMoviesLoading: PropTypes.bool,
};
