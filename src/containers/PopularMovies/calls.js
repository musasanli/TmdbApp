import { request } from '../../services/requestWrapper';
import { API_URL, API_KEY } from '../../utils/consts';

export const fetchPopularFilms = (query) =>
  request(`${API_URL}/movie/popular?api_key=${API_KEY}&query=${query}`, {
    method: 'GET',
  });
