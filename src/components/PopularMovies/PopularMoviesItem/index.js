import { connect } from 'react-redux';

import { PopularMoviesItem } from './PopularMoviesItem';

import { fetchPopularFilmsCall } from '../../../containers/PopularMovies/action';
import { findRelatedGenres } from '../../../containers/MainPage/selector';

const mapStateToProps = (state) => ({
  genres: (genres) => findRelatedGenres(state, genres),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPopularFilms: () => dispatch(fetchPopularFilmsCall()),
});

export const PopularMoviesItemView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopularMoviesItem);
