import { fetchPopularMovies } from './calls';
import { actionTypes } from './types';

export const fetchPopularMoviesCall = () => (dispatch) => {
  dispatch(popularMoviesInitial());

  fetchPopularMovies()
    .then((res) => dispatch(popularMovies(res)))
    .catch((error) => dispatch(popularMoviesFail(error)));
};

export const popularMoviesInitial = () => {
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES_INITIAL,
    isLoading: true,
    isSuccessfullyFetched: false,
  };
};

export const popularMovies = (data) => {
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES_SUCCESFUL,
    payload: data,
    isLoading: false,
    isSuccessfullyFetched: true,
  };
};

export const popularMoviesFail = () => {
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES_FAIL,
    isSuccessfullyFetched: false,
  };
};
