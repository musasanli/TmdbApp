import { actionTypes } from 'containers/SearchMovies/types';

const initialState = {
  isLoading: false,
  isSuccessfullyFetched: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUERIED_MOVIES_INITIAL:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case actionTypes.FETCH_QUERIED_MOVIES_SUCCESFUL:
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
        isSuccessfullyFetched: action.isSuccessfullyFetched,
      };

    case actionTypes.FETCH_QUERIED_MOVIES_FAIL:
      return {
        ...state,
        isSuccessfullyFetched: action.isSuccessfullyFetched,
      };

    default:
      return state;
  }
};

export default searchReducer;
