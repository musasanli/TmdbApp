import { fetchQueriedFilms, fetchRandomMovie } from './calls';
import { actionTypes } from './types';
import { getRandomInt } from './utils';

export const fetchQueriedFilmsCall = (query) => (dispatch) => {
  dispatch(queriedFilmsInitial());

  fetchQueriedFilms(query)
    .then((res) => dispatch(queriedFilms(res)))
    .catch((error) => dispatch(queriedFilmsFail(error)));
};

export const fetchRandomMovieCall = () => (dispatch) => {
  fetchRandomMovie()
    .then((res) =>
      dispatch(randomMovie(res.results[getRandomInt()].backdrop_path)),
    )
    .catch((error) => dispatch(randomMovieFail(error)));
};

export const queriedFilmsInitial = () => {
  return {
    type: actionTypes.FETCH_QUERIED_MOVIES_INITIAL,
    isLoading: true,
    isSuccessfullyFetched: false,
  };
};

export const queriedFilms = (data) => {
  return {
    type: actionTypes.FETCH_QUERIED_MOVIES_SUCCESFUL,
    payload: data,
    isLoading: false,
    isSuccessfullyFetched: true,
  };
};

export const queriedFilmsFail = () => {
  return {
    type: actionTypes.FETCH_QUERIED_MOVIES_FAIL,
    isSuccessfullyFetched: false,
  };
};

export const randomMovie = (data) => {
  return {
    type: actionTypes.FETCH_RANDOM_MOVIE_SUCCESFUL,
    payload: data,
  };
};

export const randomMovieFail = () => {
  return {
    type: actionTypes.FETCH_RANDOM_MOVIE_FAIL,
    isRandomSuccessfullyFetched: false,
  };
};
