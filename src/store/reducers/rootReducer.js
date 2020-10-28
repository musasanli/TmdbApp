import { combineReducers } from 'redux';

import mainReducer from './Main/mainReducer';
import searchReducer from './Search/searchReducer';
import popularMoviesReducers from './Popular/popularMoviesReducer';
import upcomingMoviesReducers from './Upcoming/upcomingMoviesReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  main: mainReducer,
  popular: popularMoviesReducers,
  upcoming: upcomingMoviesReducers,
});

export default rootReducer;
