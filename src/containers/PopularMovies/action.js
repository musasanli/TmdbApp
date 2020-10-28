import { fetchPopularFilms } from './calls';
import { actionTypes } from './types';

export const fetchPopularFilmsCall = () => (dispatch) => {
  dispatch(popularFilmsInitial());

  fetchPopularFilms()
    .then((res) => dispatch(popularFilms(res)))
    .catch((error) => dispatch(popularFilmsFail(error)));
};

export const popularFilmsInitial = () => {
  return {
    type: actionTypes.FETCH_POPULAR_FILMS_INITIAL,
    isLoading: true,
    isSuccessfullyFetched: false,
  };
};

export const popularFilms = (data) => {
  return {
    type: actionTypes.FETCH_POPULAR_FILMS_SUCCESFUL,
    payload: data,
    isLoading: false,
    isSuccessfullyFetched: true,
  };
};

export const popularFilmsFail = () => {
  return {
    type: actionTypes.FETCH_POPULAR_FILMS_FAIL,
    isSuccessfullyFetched: false,
  };
};
