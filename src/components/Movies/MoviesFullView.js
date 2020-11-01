import React from 'react';
import PropTypes from 'prop-types';

import { MovieItemFullView } from './MovieItemFullView/index';
import { SadFace } from '../common/SadFace/SadFace';

import './MoviesFullView.scss';

export const MoviesFullView = ({ movies, header }) => {
  return (
    <div>
      <h1 className="MovieFullContainerHeader">{header}</h1>
      <div className="MovieFullContainer" data-testid="movie_full_container">
        {!movies.length && (
          <div className="SadFace" data-testid="sad_face">
            <SadFace />
          </div>
        )}
        {movies.map((element, i) => (
          <div key={`movie-${i}`}>
            <MovieItemFullView
              data={element}
              data-testid="movie_item_full_view"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

MoviesFullView.propTypes = {
  movies: PropTypes.array,
  header: PropTypes.string,
};
