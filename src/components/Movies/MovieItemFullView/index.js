import { connect } from 'react-redux';

import { fetchSelectedMovie } from '../../../containers/MainPage/action';
import { findRelatedGenres } from '../../../containers/MainPage/selector';

import { MovieItemFull } from './MovieItemFull';

const mapStateToProps = (state) => ({
  genres: (genres) => findRelatedGenres(state, genres),
});

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (id) => dispatch(fetchSelectedMovie(id)),
});

export const MovieItemFullView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieItemFull);
