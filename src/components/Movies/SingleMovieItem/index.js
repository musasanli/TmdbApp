import { connect } from 'react-redux';

import {
  getSelectedMovie,
  getShowSelectedMovieTrailer,
} from '../../../containers/MainPage/selector';
import { closeSelectedMovie } from '../../../containers/MainPage/action';

import { SingleMovieItem } from './SingleMovieItem';

const mapStateToProps = (state) => ({
  selectedMovie: getSelectedMovie(state),
  selectedMovieTrailer: getShowSelectedMovieTrailer(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeSelectedMovie: () => dispatch(closeSelectedMovie()),
});

export const SingleMovieItemView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleMovieItem);
