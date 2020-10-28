import { MAX_DESC } from './consts';

export const truncateDesription = (description) => {
  if (description.length > MAX_DESC) {
    return `${description.substring(0, MAX_DESC)}...`;
  }
  return description;
};

export const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return `${title.substring(0, maxLength)}...`;
  }
  return title;
};

export const popularityColor = (data) => {
  //const score = parseInt(data);
  if (data < 4) {
    return 'low';
  } else if (data < 7) {
    return 'middle';
  } else {
    return 'high';
  }
};

export const displayGenres = (arr) => {
  return arr.slice(0, arr.length).join(',  ');
};
