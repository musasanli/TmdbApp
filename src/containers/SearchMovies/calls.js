import { request } from '../../services/requestWrapper';
import { API_URL, API_KEY } from '../../utils/consts';

export const fetchQueriedFilms = (query) =>
  request(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`, {
    method: 'GET',
  });

export const fetchRandomMovie = () =>
  request(`${API_URL}/movie/popular?api_key=${API_KEY}`, {
    method: 'GET',
  });
