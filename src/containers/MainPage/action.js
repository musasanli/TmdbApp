import {
  fetchGenresCall,
  fetchSelectedMovieCall,
  fetchSelectedMovieTrailerCall,
  fetchFavoriteMoviesCall,
  fetchWatchlistMoviesCall,
} from './calls';

import { actionTypes } from './types';

export const fetchGenres = () => (dispatch) => {
  fetchGenresCall().then((res) => dispatch(fetchedGenres(res)));
};

export const fetchSelectedMovieTrailer = (id) => (dispatch) => {
  fetchSelectedMovieTrailerCall(id).then((res) =>
    dispatch(fetchedSelectedMovieTrailer(res)),
  );
};

export const fetchSelectedMovie = (id) => (dispatch) => {
  fetchSelectedMovieCall(id).then((res) => {
    dispatch(fetchSelectedMovieTrailer(id));
    dispatch(fetchedSelectedMovie(res));
  });
};

export const fetchFavoriteMovies = () => (dispatch) => {
  fetchFavoriteMoviesCall().then((res) =>
    dispatch(fetchedFavoritesMovies(res)),
  );
};

export const fetchWatchlistMovies = () => (dispatch) => {
  fetchWatchlistMoviesCall().then((res) =>
    dispatch(fetchedWatchlistMovies(res)),
  );
};

export const fetchedGenres = (data) => {
  return {
    type: actionTypes.FETCH_GENRES,
    data: data,
  };
};

export const fetchedSelectedMovie = (data) => {
  return {
    type: actionTypes.GET_SELECTED_MOVIE,
    data: data,
    showSelectedMovie: true,
  };
};

export const fetchedSelectedMovieTrailer = (data) => {
  return {
    type: actionTypes.GET_SELECTED_MOVIE_TRAILER,
    data: data,
  };
};

export const closeSelectedMovie = () => {
  return {
    type: actionTypes.CLOSE_SELECTED_MOVIE,
  };
};

export const fetchedFavoritesMovies = (data) => {
  return {
    type: actionTypes.FETCH_FAVORITE_MOVIES,
    data: data,
  };
};

export const fetchedWatchlistMovies = (data) => {
  return {
    type: actionTypes.FETCH_WATCHLIST_MOVIES,
    data: data,
  };
};

export const showHome = () => {
  return {
    type: actionTypes.SET_MENU_VISIBILITY,
    showHome: true,
    showFavorites: false,
    showWatchlist: false,
  };
};

export const showFavorites = () => {
  return {
    type: actionTypes.SET_MENU_VISIBILITY,
    showHome: false,
    showFavorites: true,
    showWatchlist: false,
  };
};

export const showWatchlist = () => {
  return {
    type: actionTypes.SET_MENU_VISIBILITY,
    showHome: false,
    showFavorites: false,
    showWatchlist: true,
  };
};
