import { actionTypes } from '../../../containers/MainPage/types';

const initialState = {
  showSelectedMovie: false,
  showHome: true,
  showFavorites: false,
  showWatchlist: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENRES:
      return {
        ...state,
        genresData: action.data,
      };

    case actionTypes.GET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovieData: action.data,
        showSelectedMovie: action.showSelectedMovie,
      };

    case actionTypes.CLOSE_SELECTED_MOVIE:
      return {
        ...state,
        showSelectedMovie: false,
      };

    case actionTypes.GET_SELECTED_MOVIE_TRAILER:
      return {
        ...state,
        selectedMovieDataTrailer: action.data,
      };

    case actionTypes.SET_MENU_VISIBILITY:
      return {
        ...state,
        showHome: action.showHome,
        showFavorites: action.showFavorites,
        showWatchlist: action.showWatchlist,
      };

    case actionTypes.FETCH_FAVORITE_MOVIES:
      return {
        ...state,
        favData: action.data,
      };

    case actionTypes.FETCH_WATCHLIST_MOVIES:
      return {
        ...state,
        watchData: action.data,
      };

    default:
      return state;
  }
};

export default searchReducer;
