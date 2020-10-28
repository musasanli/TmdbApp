import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PopularMoviesView } from '../PopularMovies';
import { UpcomingMoviesView } from '../UpcomingMovies';
import { SearcMovieView } from '../SearchMovie';
import { MoviesFullView } from '../Movies/MoviesFullView';

import './MainPage.scss';

export const MainPage = ({
  searchedMovies,
  isSearchLoading,
  isSearchSuccessfullyFetched,
  getGenres,
}) => {
  const isWithoutError = !isSearchLoading && isSearchSuccessfullyFetched;
  const shouldDisplayResult = isWithoutError && searchedMovies;

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  const fullReview = () => {
    return <MoviesFullView movies={searchedMovies} />;
  };

  const mainPageFeatures = () => {
    return (
      <div>
        <PopularMoviesView />
        <UpcomingMoviesView />
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
  getGenres: PropTypes.func,
  genres: PropTypes.object,
};
