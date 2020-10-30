import React from 'react';
import PropTypes from 'prop-types';

import { MovieItemFullView } from './MovieItemFullView/index';
import { SadFace } from './SadFace';

import './MoviesFullView.scss';

export const MoviesFullView = ({ movies }) => {
  return (
    <div className="MovieFullContainer">
      {!movies.length && <SadFace />}
      {movies.map((element, i) => (
        <MovieItemFullView key={`movie-${i}`} data={element} />
      ))}
    </div>
  );
};

MoviesFullView.propTypes = {
  movies: PropTypes.array,
};
