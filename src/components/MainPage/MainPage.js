import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PopularMoviesView } from 'components/PopularMovies';
import { UpcomingMoviesView } from 'components/UpcomingMovies';
import { SearcMovieView } from 'components/SearchMovie';
import { MoviesFullView } from 'components/Movies/MoviesFullView';
import { SingleMovieItemView } from 'components/Movies/SingleMovieItem';
import { SideMenuView } from 'components/SideMenu';

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
      return (
        <MoviesFullView movies={getFavoriteMovies} header={'Favorite Movies'} />
      );
    }

    if (showWatchlist) {
      return (
        <MoviesFullView movies={getWatchlistMovies} header={'Watchlist'} />
      );
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
    <div className="MainPage" data-testid="main_page_view">
      <div data-testid="side_menu">
        <SideMenuView />
      </div>
      <div data-testid="search_movie">
        <SearcMovieView />
      </div>
      {isSearchLoading && <p data-testid="main_page_spinner">Spinner</p>}
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
