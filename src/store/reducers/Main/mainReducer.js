import { actionTypes } from '../../../containers/MainPage/types';

const initialState = {
  showSelectedMovie: false,
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

    default:
      return state;
  }
};

export default searchReducer;
