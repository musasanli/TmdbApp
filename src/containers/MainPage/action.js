import {
  fetchGenresCall,
  fetchSelectedMovieCall,
  fetchSelectedMovieTrailerCall,
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
