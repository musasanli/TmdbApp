import { connect } from 'react-redux';

import {
  getSearchedMovies,
  getSearchIsLoading,
  getIsSuccessfullyFetched,
  findRelatedGenres,
} from '../../containers/MainPage/selector';

import { fetchGenres } from '../../containers/MainPage/action';

import { MainPage } from './MainPage';

const mapStateToProps = (state) => ({
  searchedMovies: getSearchedMovies(state),
  isSearchLoading: getSearchIsLoading(state),
  isSearchSuccessfullyFetched: getIsSuccessfullyFetched(state),
  genres: (genres) => findRelatedGenres(state, genres),
});

const mapDispatchToProps = (dispatch) => ({
  getGenres: () => dispatch(fetchGenres()),
});

export const MainPageView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
