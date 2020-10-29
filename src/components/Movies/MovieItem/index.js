import { connect } from 'react-redux';

import { fetchSelectedMovie } from '../../../containers/MainPage/action';
import { findRelatedGenres } from '../../../containers/MainPage/selector';

import { MovieItem } from './MovieItem';

const mapStateToProps = (state) => ({
  genres: (genres) => findRelatedGenres(state, genres),
});

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (id) => dispatch(fetchSelectedMovie(id)),
});

export const MovieItemView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieItem);
