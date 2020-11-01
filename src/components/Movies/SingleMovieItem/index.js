import { connect } from 'react-redux';

import {
  getSelectedMovie,
  getShowSelectedMovieTrailer,
} from 'containers/MainPage/selector';
import { manageFavlist, manageWatchlist } from 'containers/MovieItem/action';

import { closeSelectedMovie } from 'containers/MainPage/action';
import {
  checkIsFaved,
  checkIsInWatchlist,
} from 'containers/MovieItem/selector';

import { SingleMovieItem } from './SingleMovieItem';

const mapStateToProps = (state) => ({
  selectedMovie: getSelectedMovie(state),
  selectedMovieTrailer: getShowSelectedMovieTrailer(state),
  getIsFaved: (id) => checkIsFaved(state, id),
  getIsInWatchlist: (id) => checkIsInWatchlist(state, id),
});

const mapDispatchToProps = (dispatch) => ({
  closeSelectedMovie: () => dispatch(closeSelectedMovie()),
  setFavlist: (id, key) => dispatch(manageFavlist(id, key)),
  setWatchlist: (id, key) => dispatch(manageWatchlist(id, key)),
});

export const SingleMovieItemView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleMovieItem);
