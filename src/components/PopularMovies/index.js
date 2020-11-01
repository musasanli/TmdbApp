import { connect } from 'react-redux';

import { fetchPopularMoviesCall } from 'containers/PopularMovies/action';
import {
  getPopularMovies,
  getIsPopularMoviesLoading,
} from 'containers/PopularMovies/selector';

import { PopularMovies } from './PopularMovies';

const mapStateToProps = (state) => ({
  popularMovies: getPopularMovies(state),
  isPopularMoviesLoading: getIsPopularMoviesLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getPopularMovies: () => dispatch(fetchPopularMoviesCall()),
});

export const PopularMoviesView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopularMovies);
