import { actionTypes } from '../../../containers/UpcomingMovies/types';

const initialState = {
  isLoading: false,
  isSuccessfullyFetched: false,
};

const upcomingMoviesReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_UPCOMING_MOVIES_INITIAL:
      return {
        ...state,
        isLoading: action.isLoading,
        isSuccessfullyFetched: action.isSuccessfullyFetched,
      };

    case actionTypes.FETCH_UPCOMING_MOVIES_SUCCESFUL:
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
        isSuccessfullyFetched: action.isSuccessfullyFetched,
      };

    case actionTypes.FETCH_UPCOMING_MOVIES_FAIL:
      return {
        ...state,
        isSuccessfullyFetched: action.isSuccessfullyFetched,
      };

    default:
      return state;
  }
};

export default upcomingMoviesReducers;
