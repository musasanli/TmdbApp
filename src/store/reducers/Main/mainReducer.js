import { actionTypes } from '../../../containers/MainPage/types';

const initialState = {};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENRES:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default searchReducer;
