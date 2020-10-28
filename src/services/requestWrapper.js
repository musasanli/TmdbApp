import axios from 'axios';
// axios.defaults.headers.get['Pragma'] = 'no-cache';
// axios.defaults.headers.get['Cache-Control'] = 'no-cache, no-store';

const requestErrorHandler = (error) => {
  //switch case status (403, 404.. and redirect paths)
  return `Error: ${error}`;
};

export const request = (url, options) => {
  return axios({
    url,
    ...options,
  })
    .then((response) => response.data)
    .catch((error) => requestErrorHandler(error));
};
