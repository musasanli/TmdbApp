import { connect } from 'react-redux';

import { PopularMovies } from './PopularMovies';

import { fetchPopularFilmsCall } from '../../containers/PopularMovies/action';
import { getPopularMovies } from '../../containers/PopularMovies/selector';

const mapStateToProps = (state) => ({
  popularMovies: getPopularMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
  getPopularMovies: () => dispatch(fetchPopularFilmsCall()),
});

export const PopularMoviesView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopularMovies);
