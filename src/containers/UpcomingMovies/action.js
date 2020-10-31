import { fetchUpcomingMovies } from './calls';
import { actionTypes } from './types';

export const fetchUpcomingMoviesCall = () => (dispatch) => {
  dispatch(upcomingMoviesInitial());

  fetchUpcomingMovies()
    .then((res) => dispatch(upcomingMovies(res)))
    .catch((error) => dispatch(upcomingMoviesFail(error)));
};

export const upcomingMoviesInitial = () => {
  return {
    type: actionTypes.FETCH_UPCOMING_MOVIES_INITIAL,
    isLoading: true,
    isSuccessfullyFetched: false,
  };
};

export const upcomingMovies = (data) => {
  return {
    type: actionTypes.FETCH_UPCOMING_MOVIES_SUCCESFUL,
    payload: data,
    isLoading: false,
    isSuccessfullyFetched: true,
  };
};

export const upcomingMoviesFail = () => {
  return {
    type: actionTypes.FETCH_UPCOMING_MOVIES_FAIL,
    isSuccessfullyFetched: false,
  };
};
