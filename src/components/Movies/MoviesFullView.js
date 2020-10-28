import React from 'react';
import PropTypes from 'prop-types';

import { MovieItem } from './MovieItem';
import './MoviesFullView.scss';

export const MoviesFullView = ({ movies }) => {
  return (
    <div className="MovieFullContainer">
      {movies.map((element, i) => (
        <MovieItem key={`movie-${i}`} data={element} />
      ))}
    </div>
  );
};

MoviesFullView.propTypes = {
  movies: PropTypes.array,
};
