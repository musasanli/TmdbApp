import React from 'react';
import PropTypes from 'prop-types';

import { truncateTitle, popularityColor, displayGenres } from '../utils';
import { IMAGE_URL } from '../../../utils/consts';
import { MAX_POPULAR_TITLE } from '../consts';

import logo from '../../../assests/logo.svg';
import './MovieItem.scss';

export const MovieItem = ({ data, genres, selectMovie }) => {
  const popularityClass = `PopularityCircle__${popularityColor(
    data.vote_average,
  )}`;
  const poster = data.poster_path ? `${IMAGE_URL}${data.poster_path}` : logo;
  const title = truncateTitle(data.original_title, MAX_POPULAR_TITLE);
  const relatedGenres = displayGenres(genres(data.genre_ids));

  const DetailedMovie = () => {
    selectMovie(data.id);
  };

  return (
    <div className="MovieItemContainer" onClick={DetailedMovie}>
      <div className="MovieCardPopular" id="bright">
        <div className="InfoSectionPopular">
          <div className="MovieHeaderPopular">
            <img className="MoviePosterPopular" src={poster} />
          </div>
          <div className="MovieInfoPopular">
            <h2>{title}</h2>
            <h4>{data.release_date}</h4>
            <h4>{relatedGenres}</h4>
          </div>
          <div className={popularityClass}>{data.vote_average}</div>
          <div className="MovieSocialPopular">
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
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  data: PropTypes.object,
  genres: PropTypes.func,
  selectMovie: PropTypes.func,
};
