import { manageFavlistCall, manageWatchlistCall } from './calls';
import { actionTypes } from './types';

export const manageFavlist = (id, key) => (dispatch) =>
  manageFavlistCall(id, key).then((res) => dispatch(setFavMoviesState(res)));

export const manageWatchlist = (id, key) => (dispatch) =>
  manageWatchlistCall(id, key).then((res) =>
    dispatch(setWatchlistMoviesState(res)),
  );

export const setFavMoviesState = () => {
  return {
    type: actionTypes.MANAGE_FAV_MOVIES,
  };
};

export const setWatchlistMoviesState = () => {
  return {
    type: actionTypes.MANAGE_WATCHLIST_MOVIES,
  };
};
