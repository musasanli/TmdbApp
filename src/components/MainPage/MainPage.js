import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PopularMoviesView } from '../PopularMovies';
import { UpcomingMoviesView } from '../UpcomingMovies';
import { SearcMovieView } from '../SearchMovie';
import { MoviesFullView } from '../Movies/MoviesFullView';
import { SingleMovieItemView } from '../Movies/SingleMovieItem';
import { SideMenuView } from '../SideMenu';

import './MainPage.scss';

export const MainPage = ({
  searchedMovies,
  isSearchLoading,
  isSearchSuccessfullyFetched,
  getGenres,
  showSelectedMovie,
  showFavorites,
  showWatchlist,
  favoriteMovies,
  watchlistMovies,
  getFavoriteMovies,
  getWatchlistMovies,
  isFavedMoviesChanged,
  isWatchlistMoviesChanged,
}) => {
  const isWithoutError = !isSearchLoading && isSearchSuccessfullyFetched;
  const shouldDisplayResult = isWithoutError && searchedMovies;

  useEffect(() => {
    getGenres();
    favoriteMovies();
    watchlistMovies();
  }, [getGenres, favoriteMovies, watchlistMovies]);

  useEffect(() => {
    getGenres();
    favoriteMovies();
  }, [isFavedMoviesChanged]);

  useEffect(() => {
    getGenres();
    watchlistMovies();
  }, [isWatchlistMoviesChanged]);

  const display = () => {
    if (showSelectedMovie) {
      return <SingleMovieItemView />;
    }

    if (showFavorites) {
      return <MoviesFullView movies={getFavoriteMovies} />;
    }

    if (showWatchlist) {
      return <MoviesFullView movies={getWatchlistMovies} />;
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
      <SideMenuView />
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
  showFavorites: PropTypes.bool,
  showWatchlist: PropTypes.bool,
  favoriteMovies: PropTypes.func,
  watchlistMovies: PropTypes.func,
  getFavoriteMovies: PropTypes.array,
  getWatchlistMovies: PropTypes.array,
  isFavedMoviesChanged: PropTypes.bool,
  isWatchlistMoviesChanged: PropTypes.bool,
};
