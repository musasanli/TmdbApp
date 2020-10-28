import { connect } from 'react-redux';

import { getRandomPoster } from '../../containers/SearchMovies/selector';
import {
  fetchQueriedFilmsCall,
  fetchRandomMovieCall,
} from '../../containers/SearchMovies/action';

import { SearchMovie } from './SearchMovie';

const mapStateToProps = (state) => ({
  randomMovie: getRandomPoster(state),
});

const mapDispatchToProps = (dispatch) => ({
  searchFilms: (query) => dispatch(fetchQueriedFilmsCall(query)),
  getRandomMovie: () => dispatch(fetchRandomMovieCall()),
});

export const SearcMovieView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchMovie);
