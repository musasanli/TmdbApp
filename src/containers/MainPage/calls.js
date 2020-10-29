import { request } from '../../services/requestWrapper';
import { API_URL, API_KEY, SESSION_ID } from '../../utils/consts';

export const fetchGenresCall = () =>
  request(`${API_URL}/genre/movie/list?api_key=${API_KEY}`, {
    method: 'GET',
  });

export const fetchSelectedMovieCall = (movieId) =>
  request(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`, {
    method: 'GET',
  });

export const fetchSelectedMovieTrailerCall = (movieId) =>
  request(`${API_URL}/movie/${movieId}/videos?api_key=${API_KEY}`, {
    method: 'GET',
  });

export const fetchFavoriteMoviesCall = () =>
  request(
    `${API_URL}/account/a/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}`,
    {
      method: 'GET',
    },
  );

export const fetchWatchlistMoviesCall = () =>
  request(
    `${API_URL}/account/a/watchlist/movies?api_key=${API_KEY}&session_id=${SESSION_ID}`,
    {
      method: 'GET',
    },
  );
