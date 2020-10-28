import React from 'react';
import PropTypes from 'prop-types';

import { PopularMoviesView } from '../PopularMovies';
import { FutureMoviesView } from '../FutureMovies';
import { SearcMovieView } from '../SearchMovie';
import { MoviesFullView } from '../Movies/MoviesFullView';

import './MainPage.scss';

export const MainPage = ({
  searchedMovies,
  isSearchLoading,
  isSearchSuccessfullyFetched,
}) => {
  const isWithoutError = !isSearchLoading && isSearchSuccessfullyFetched;
  const shouldDisplayResult = isWithoutError && searchedMovies;

  const fullReview = () => {
    return <MoviesFullView movies={searchedMovies} />;
  };

  const mainPageFeatures = () => {
    return (
      <div>
        <PopularMoviesView />
        <FutureMoviesView />
      </div>
    );
  };

  return (
    <div className="MainPage">
      <SearcMovieView />
      {isSearchLoading && <p>Spinner</p>}
      {shouldDisplayResult ? fullReview() : mainPageFeatures()}
    </div>
  );
};

MainPage.propTypes = {
  searchedMovies: PropTypes.array,
  isSearchLoading: PropTypes.bool,
  isSearchSuccessfullyFetched: PropTypes.bool,
};
