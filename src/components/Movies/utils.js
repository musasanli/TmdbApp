import { MAX_DESC, YOUTUBE_URL } from './consts';

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
  if (data < 4) {
    return 'low';
  } else if (data < 7) {
    return 'middle';
  } else {
    return 'high';
  }
};

export const displayGenres = (arr) => arr?.slice(0, arr.length).join(', ');

export const displayGenresSingle = (arr) =>
  arr?.map((item) => item.name).join(', ');

export const runTimeText = (min) => `${min} min`;

export const refactorTrailerUrl = (key) => `${YOUTUBE_URL}${key}`;
