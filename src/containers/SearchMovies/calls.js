import { request } from '../../services/requestWrapper';
import { API_URL, API_KEY } from '../../utils/consts';

export const fetchQueriedFilms = (query) =>
  request(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`, {
    method: 'GET',
  });
