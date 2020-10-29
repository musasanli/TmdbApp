import { request } from '../../services/requestWrapper';
import { API_URL, API_KEY } from '../../utils/consts';

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
