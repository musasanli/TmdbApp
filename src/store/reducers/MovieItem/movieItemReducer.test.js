import movieItemReducer from './movieItemReducer';
import { actionTypes } from 'containers/MovieItem/types';

describe('Movie Item reducer', () => {
  it('should return the initial state', () => {
    expect(movieItemReducer(undefined, {})).toEqual({
      isFavlistChanged: false,
      isWatchlistChanged: false,
    });
  });

  it('should handle MANAGE_FAV_MOVIES', () => {
    const type = actionTypes.MANAGE_FAV_MOVIES;
    const givenState = {
      isFavlistChanged: false,
      isWatchlistChanged: false,
    };

    expect(movieItemReducer(givenState, { type })).toEqual({
      isFavlistChanged: true,
      isWatchlistChanged: false,
    });
  });

  it('should handle MANAGE_FAV_MOVIES', () => {
    const type = actionTypes.MANAGE_FAV_MOVIES;
    const givenState = {
      isFavlistChanged: false,
      isWatchlistChanged: true,
    };

    expect(movieItemReducer(givenState, { type })).toEqual({
      isFavlistChanged: true,
      isWatchlistChanged: true,
    });
  });

  it('should handle MANAGE_WATCHLIST_MOVIES', () => {
    const type = actionTypes.MANAGE_WATCHLIST_MOVIES;
    const givenState = {
      isFavlistChanged: false,
      isWatchlistChanged: false,
    };

    expect(movieItemReducer(givenState, { type })).toEqual({
      isFavlistChanged: false,
      isWatchlistChanged: true,
    });
  });

  it('should handle MANAGE_WATCHLIST_MOVIES', () => {
    const type = actionTypes.MANAGE_WATCHLIST_MOVIES;
    const givenState = {
      isFavlistChanged: true,
      isWatchlistChanged: false,
    };

    expect(movieItemReducer(givenState, { type })).toEqual({
      isFavlistChanged: true,
      isWatchlistChanged: true,
    });
  });
});
