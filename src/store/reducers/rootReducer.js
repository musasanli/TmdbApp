import { combineReducers } from 'redux';

import mainReducer from './Main/mainReducer';
import searchReducer from './Search/searchReducer';
import popularMoviesReducers from './Popular/popularMoviesReducer';
import upcomingMoviesReducers from './Upcoming/upcomingMoviesReducer';
import movieItemReducers from './MovieItem/movieItemReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  main: mainReducer,
  popular: popularMoviesReducers,
  upcoming: upcomingMoviesReducers,
  movieItem: movieItemReducers,
});

export default rootReducer;
