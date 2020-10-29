import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PopularMoviesView } from '../PopularMovies';
import { UpcomingMoviesView } from '../UpcomingMovies';
import { SearcMovieView } from '../SearchMovie';
import { MoviesFullView } from '../Movies/MoviesFullView';
import { SingleMovieItemView } from '../Movies/SingleMovieItem';

import './MainPage.scss';

export const MainPage = ({
  searchedMovies,
  isSearchLoading,
  isSearchSuccessfullyFetched,
  getGenres,
  showSelectedMovie,
}) => {
  const isWithoutError = !isSearchLoading && isSearchSuccessfullyFetched;
  const shouldDisplayResult = isWithoutError && searchedMovies;

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  const display = () => {
    if (showSelectedMovie) {
      return <SingleMovieItemView />;
    }

    return shouldDisplayResult ? fullReview() : mainPageFeatures();
  };
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
      {display()}
    </div>
  );
};

MainPage.propTypes = {
  searchedMovies: PropTypes.array,
  isSearchLoading: PropTypes.bool,
  isSearchSuccessfullyFetched: PropTypes.bool,
  getGenres: PropTypes.func,
  showSelectedMovie: PropTypes.bool,
};
