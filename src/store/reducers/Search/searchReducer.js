import { actionTypes } from '../../../containers/SearchMovies/types';

const initialState = {
  isLoading: false,
  isSuccessfullyFetched: false,
  isRandomSuccessfullyFetched: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUERIED_FILMS_INITIAL:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case actionTypes.FETCH_QUERIED_FILMS_SUCCESFUL:
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
        isSuccessfullyFetched: action.isSuccessfullyFetched,
      };

    case actionTypes.FETCH_RANDOM_MOVIE_SUCCESFUL:
      return {
        ...state,
        randomMovie: action.payload,
      };

    case actionTypes.FETCH_QUERIED_FILMS_FAIL:
      return {
        ...state,
        isSuccessfullyFetched: action.isSuccessfullyFetched,
      };

    case actionTypes.FETCH_RANDOM_MOVIE_FAIL:
      return {
        ...state,
        isRandomSuccessfullyFetched: action.isRandomSuccessfullyFetched,
      };

    default:
      return state;
  }
};

export default searchReducer;
