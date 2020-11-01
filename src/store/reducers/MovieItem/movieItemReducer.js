import { actionTypes } from 'containers/MovieItem/types';

const initialState = {
  isFavlistChanged: false,
  isWatchlistChanged: false,
};

const movieItemReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MANAGE_FAV_MOVIES:
      return {
        ...state,
        isFavlistChanged: !state.isFavlistChanged,
      };

    case actionTypes.MANAGE_WATCHLIST_MOVIES:
      return {
        ...state,
        isWatchlistChanged: !state.isWatchlistChanged,
      };

    default:
      return state;
  }
};

export default movieItemReducers;
