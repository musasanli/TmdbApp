import { request } from '../../services/requestWrapper';
import { API_URL, API_KEY } from '../../utils/consts';

export const fetchUpcomingMovies = (query) =>
  request(`${API_URL}/movie/upcoming?api_key=${API_KEY}&query=${query}`, {
    method: 'GET',
  });
