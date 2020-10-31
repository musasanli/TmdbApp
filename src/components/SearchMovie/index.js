import { connect } from 'react-redux';

import { fetchQueriedFilmsCall } from '../../containers/SearchMovies/action';
import { showHome } from '../../containers//MainPage/action';

import { SearchMovie } from './SearchMovie';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  searchFilms: (query) => dispatch(fetchQueriedFilmsCall(query)),
  goHomePage: () => dispatch(showHome()),
});

export const SearcMovieView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchMovie);
