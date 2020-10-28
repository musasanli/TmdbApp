import { MAX_DESC, MAX_TITLE } from './consts';

export const truncateDesription = (description) => {
  if (description.length > MAX_DESC) {
    return `${description.substring(0, MAX_DESC)}...`;
  }
  return description;
};

export const truncateTitle = (title) => {
  if (title.length > MAX_TITLE) {
    return `${title.substring(0, MAX_TITLE)}...`;
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
