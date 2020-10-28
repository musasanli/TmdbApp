import { connect } from 'react-redux';

import {
  getSearchedMovies,
  getSearchIsLoading,
  getIsSuccessfullyFetched,
} from '../../containers/MainPage/selector';

import { MainPage } from './MainPage';

const mapStateToProps = (state) => ({
  searchedMovies: getSearchedMovies(state),
  isSearchLoading: getSearchIsLoading(state),
  isSearchSuccessfullyFetched: getIsSuccessfullyFetched(state),
});

const mapDispatchToProps = () => ({});

export const MainPageView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
