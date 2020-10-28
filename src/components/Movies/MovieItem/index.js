import { connect } from 'react-redux';

import { findRelatedGenres } from '../../../containers/MainPage/selector';

import { MovieItem } from './MovieItem';

const mapStateToProps = (state) => ({
  genres: (genres) => findRelatedGenres(state, genres),
});

const mapDispatchToProps = () => ({});

export const MovieItemView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieItem);
