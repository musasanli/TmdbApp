import React from 'react';
import PropTypes from 'prop-types';

import {
  truncateDesription,
  truncateTitle,
  popularityColor,
  displayGenres,
} from '../utils';
import { MAX_TITLE } from '../consts';
import { IMAGE_URL } from '../../../utils/consts';

import logo from '../../../assests/logo.svg';
import './MovieItemFull.scss';

export const MovieItemFull = ({ data, genres }) => {
  const popularityClass = `PopularityCircle__${popularityColor(
    data.vote_average,
  )}`;

  const poster = data.poster_path ? `${IMAGE_URL}${data.poster_path}` : logo;
  const backgroundImage = data.backdrop_path
    ? `${IMAGE_URL}${data.backdrop_path}`
    : logo;

  const relatedGenres = displayGenres(genres(data.genre_ids));

  return (
    <div className="MovieItemContainer">
      <div className="MovieCard" id="bright">
        <div className="InfoSection">
          <div className="MovieHeader">
            <img className="MoviePoster" src={poster} />
            <h1>{truncateTitle(data.original_title)}</h1>
            <h4>{data.release_date}</h4>
            <h4>{relatedGenres}</h4>
          </div>
          <div className="MovieDesc">
            <p className="text">
              {truncateDesription(data.overview, MAX_TITLE)}
            </p>
          </div>
          <div className={popularityClass}>{data.vote_average}</div>
          <div className="MovieSocial">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons"></i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <img className="MovieBlurBack" src={backgroundImage} />
      </div>
    </div>
  );
};

MovieItemFull.propTypes = {
  data: PropTypes.object,
  genres: PropTypes.object,
};
