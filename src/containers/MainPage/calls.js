import { request } from '../../services/requestWrapper';
import { API_URL, API_KEY } from '../../utils/consts';

export const fetchGenresCall = () =>
  request(`${API_URL}/genre/movie/list?api_key=${API_KEY}`, {
    method: 'GET',
  });
