import { actionTypes } from '../../../containers/PopularMovies/types';

const initialState = {
  isLoading: false,
  isSuccessfullyFetched: false,
};

const popularMoviesReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR_FILMS_INITIAL:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case actionTypes.FETCH_POPULAR_FILMS_SUCCESFUL:
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
        isSuccessfullyFetched: action.isSuccessfullyFetched,
      };

    case actionTypes.FETCH_POPULAR_FILMS_FAIL:
      return {
        ...state,
        isSuccessfullyFetched: action.isSuccessfullyFetched,
      };

    default:
      return state;
  }
};

export default popularMoviesReducers;
