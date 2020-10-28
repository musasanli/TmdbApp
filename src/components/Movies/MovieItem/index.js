import { connect } from 'react-redux';

import { MovieItem } from './MovieItem';

import { findRelatedGenres } from '../../../containers/MainPage/selector';

const mapStateToProps = (state) => ({
  genres: (genres) => findRelatedGenres(state, genres),
});

const mapDispatchToProps = () => ({});

export const MovieItemView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieItem);