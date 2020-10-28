import React from 'react';
import PropTypes from 'prop-types';

import { MovieItemView } from './MovieItem/index';

import './MoviesFullView.scss';

export const MoviesFullView = ({ movies }) => {
  return (
    <div className="MovieFullContainer">
      {movies.map((element, i) => (
        <MovieItemView key={`movie-${i}`} data={element} />
      ))}
    </div>
  );
};

MoviesFullView.propTypes = {
  movies: PropTypes.array,
};
