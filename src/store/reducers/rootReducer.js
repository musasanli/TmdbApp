import { combineReducers } from 'redux';

import mainReducer from './Main/mainReducer';
import searchReducer from './Search/searchReducer';
import popularMoviesReducers from './Popular/popularMoviesReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  main: mainReducer,
  popular: popularMoviesReducers,
});

export default rootReducer;
