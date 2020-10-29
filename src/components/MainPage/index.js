import { connect } from 'react-redux';

import {
  getSearchedMovies,
  getSearchIsLoading,
  getIsSuccessfullyFetched,
  findRelatedGenres,
  getShowSelectedMovie,
  shouldDisplayFavorites,
  shouldDisplayWatchlist,
  getFavoritesMovies,
  getWatchlistMovies,
} from '../../containers/MainPage/selector';

import {
  fetchGenres,
  fetchFavoriteMovies,
  fetchWatchlistMovies,
} from '../../containers/MainPage/action';

import { MainPage } from './MainPage';

const mapStateToProps = (state) => ({
  searchedMovies: getSearchedMovies(state),
  isSearchLoading: getSearchIsLoading(state),
  isSearchSuccessfullyFetched: getIsSuccessfullyFetched(state),
  genres: (genres) => findRelatedGenres(state, genres),
  showSelectedMovie: getShowSelectedMovie(state),
  showFavorites: shouldDisplayFavorites(state),
  showWatchlist: shouldDisplayWatchlist(state),
  getFavoriteMovies: getFavoritesMovies(state),
  getWatchlistMovies: getWatchlistMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  getGenres: () => dispatch(fetchGenres()),
  favoriteMovies: () => dispatch(fetchFavoriteMovies()),
  watchlistMovies: () => dispatch(fetchWatchlistMovies()),
});

export const MainPageView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
