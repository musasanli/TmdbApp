import { connect } from 'react-redux';

import { FutureMovies } from './FutureMovies';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const FutureMoviesView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FutureMovies);
