import { combineReducers } from 'redux';
import searchReducer from './Search/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
