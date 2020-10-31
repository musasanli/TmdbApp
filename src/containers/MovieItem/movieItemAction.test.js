import { setFavMoviesState, setWatchlistMoviesState } from './action';
import { actionTypes } from './types';

describe('MovieItem actions', () => {
  it('should create an action to create MANAGE_FAV_MOVIES with default overwrite value', () => {
    const expectedAction = {
      type: actionTypes.MANAGE_FAV_MOVIES,
    };

    expect(setFavMoviesState()).toEqual(expectedAction);
  });

  it('should create an action to create MANAGE_WATCHLIST_MOVIES with default overwrite value', () => {
    const expectedAction = {
      type: actionTypes.MANAGE_WATCHLIST_MOVIES,
    };

    expect(setWatchlistMoviesState()).toEqual(expectedAction);
  });
});
