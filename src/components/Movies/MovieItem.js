import React from 'react';
import PropTypes from 'prop-types';

import { IMAGE_URL } from '../../utils/consts';
import { truncateDesription, truncateTitle, popularityColor } from './utils';
import './MovieItem.scss';
import logo from '../../assests/logo.svg';

export const MovieItem = ({ data }) => {
  const popularityClass = `PopularityCircle__${popularityColor(
    data.vote_average,
  )}`;

  const poster = data.poster_path ? `${IMAGE_URL}${data.poster_path}` : logo;
  const backgroundImage = data.backdrop_path
    ? `${IMAGE_URL}${data.backdrop_path}`
    : logo;

  return (
    <div className="MovieItemContainer">
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={poster} />
            <h1>{truncateTitle(data.original_title)}</h1>
            <h4>{data.release_date}</h4>
          </div>
          <div className="movie_desc">
            <p className="text">{truncateDesription(data.overview)}</p>
          </div>
          <div className={popularityClass}>{data.vote_average}</div>
          <div className="movie_social">
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
        <img className="blur_back" src={backgroundImage} />
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  data: PropTypes.object,
};
