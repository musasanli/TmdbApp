import { connect } from 'react-redux';

import { findRelatedGenres } from '../../../containers/MainPage/selector';

import { MovieItemFull } from './MovieItemFull';

const mapStateToProps = (state) => ({
  genres: (genres) => findRelatedGenres(state, genres),
});

const mapDispatchToProps = () => ({});

export const MovieItemFullView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieItemFull);
