import { request } from 'services/requestWrapper';
import { API_URL, API_KEY, SESSION_ID } from 'utils/consts';

export const manageFavlistCall = (id, key) =>
  request(
    `${API_URL}/account/a/favorite?api_key=${API_KEY}&session_id=${SESSION_ID}`,
    {
      method: 'POST',
      data: {
        media_type: 'movie',
        media_id: id,
        favorite: key,
      },
    },
  );

export const manageWatchlistCall = (id, key) =>
  request(
    `${API_URL}/account/a/watchlist?api_key=${API_KEY}&session_id=${SESSION_ID}`,
    {
      method: 'POST',
      data: {
        media_type: 'movie',
        media_id: id,
        watchlist: key,
      },
    },
  );
