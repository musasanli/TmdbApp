import { fetchQueriedFilms } from './calls';
import { actionTypes } from './types';

export const fetchQueriedFilmsCall = (query) => (dispatch) => {
  dispatch(queriedFilmsInitial());

  fetchQueriedFilms(query)
    .then((res) => dispatch(queriedFilms(res)))
    .catch((error) => dispatch(queriedFilmsFail(error)));
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
