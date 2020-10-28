import { fetchGenresCall } from './calls';
import { actionTypes } from './types';

export const fetchGenres = () => (dispatch) => {
  fetchGenresCall().then((res) => dispatch(fetchedGenres(res)));
};

export const fetchedGenres = (data) => {
  return {
    type: actionTypes.FETCH_GENRES,
    data: data,
  };
};
