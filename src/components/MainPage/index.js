import { connect } from 'react-redux';

import {
  getSearchedMovies,
  getSearchIsLoading,
  getIsSuccessfullyFetched,
  findRelatedGenres,
  getShowSelectedMovie,
} from '../../containers/MainPage/selector';

import { fetchGenres } from '../../containers/MainPage/action';

import { MainPage } from './MainPage';

const mapStateToProps = (state) => ({
  searchedMovies: getSearchedMovies(state),
  isSearchLoading: getSearchIsLoading(state),
  isSearchSuccessfullyFetched: getIsSuccessfullyFetched(state),
  genres: (genres) => findRelatedGenres(state, genres),
  showSelectedMovie: getShowSelectedMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  getGenres: () => dispatch(fetchGenres()),
});

export const MainPageView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
