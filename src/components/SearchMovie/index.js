import { connect } from 'react-redux';

import { fetchQueriedFilmsCall } from '../../containers/SearchMovies/action';
import { closeSelectedMovie } from '../../containers/MainPage/action';
import { showHome } from '../../containers//MainPage/action';

import { SearchMovie } from './SearchMovie';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  searchFilms: (query) => dispatch(fetchQueriedFilmsCall(query)),
  goHomePage: () => dispatch(showHome()),
  closeSelectedMovie: () => dispatch(closeSelectedMovie()),
});

export const SearcMovieView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchMovie);
