import { connect } from 'react-redux';

import { fetchUpcomingMoviesCall } from '../../containers/UpcomingMovies/action';
import {
  getUpcomingMovies,
  getIsUpcomingMoviesLoading,
} from '../../containers/UpcomingMovies/selector';

import { UpcomingMovies } from './UpcomingMovies';

const mapStateToProps = (state) => ({
  upcomingMovies: getUpcomingMovies(state),
  isUpcomingMoviesLoading: getIsUpcomingMoviesLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUpcomingMovies: () => dispatch(fetchUpcomingMoviesCall()),
});

export const UpcomingMoviesView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpcomingMovies);
