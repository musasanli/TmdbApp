import { connect } from 'react-redux';

import { fetchSelectedMovie } from '../../../containers/MainPage/action';
import {
  manageFavlist,
  manageWatchlist,
} from '../../../containers/MovieItem/action';

import { findRelatedGenres } from '../../../containers/MainPage/selector';
import {
  checkIsFaved,
  checkIsInWatchlist,
} from '../../../containers/MovieItem/selector';

import { MovieItem } from './MovieItem';

const mapStateToProps = (state) => ({
  genres: (genres) => findRelatedGenres(state, genres),
  getIsFaved: (id) => checkIsFaved(state, id),
  getIsInWatchlist: (id) => checkIsInWatchlist(state, id),
});

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (id) => dispatch(fetchSelectedMovie(id)),
  setFavlist: (id, key) => dispatch(manageFavlist(id, key)),
  setWatchlist: (id, key) => dispatch(manageWatchlist(id, key)),
});

export const MovieItemView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieItem);
