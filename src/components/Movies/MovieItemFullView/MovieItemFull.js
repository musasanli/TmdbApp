import React from 'react';
import PropTypes from 'prop-types';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { RiMovieLine, RiMovieFill } from 'react-icons/ri';

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

export const MovieItemFull = ({
  data,
  genres,
  selectMovie,
  getIsFaved,
  getIsInWatchlist,
  setFavlist,
  setWatchlist,
}) => {
  const popularityClass = `PopularityCircle__${popularityColor(
    data.vote_average,
  )}`;

  const poster = data.poster_path ? `${IMAGE_URL}${data.poster_path}` : logo;
  const backgroundImage = data.backdrop_path
    ? `${IMAGE_URL}${data.backdrop_path}`
    : logo;
  const isFaved = getIsFaved(data.id);
  const isInWatchlist = getIsInWatchlist(data.id);

  const relatedGenres = displayGenres(genres(data.genre_ids));

  const DetailedMovie = () => {
    selectMovie(data.id);
  };

  const setFavoriteMovies = (key) => {
    setFavlist(data.id, key);
  };

  const setWatchlistMovies = (key) => {
    setWatchlist(data.id, key);
  };

  return (
    <div className="MovieItemContainer">
      <div className="MovieCard">
        <div className="InfoSection">
          <div className="MovieHeader" onClick={DetailedMovie}>
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
                {isFaved ? (
                  <BsHeartFill
                    fill="red"
                    onClick={() => setFavoriteMovies(!isFaved)}
                  />
                ) : (
                  <BsHeart
                    fill="red"
                    onClick={() => setFavoriteMovies(!isFaved)}
                  />
                )}
              </li>
              <li>
                {isInWatchlist ? (
                  <RiMovieFill
                    fill="red"
                    onClick={() => setWatchlistMovies(!isInWatchlist)}
                  />
                ) : (
                  <RiMovieLine
                    fill="red"
                    onClick={() => setWatchlistMovies(!isInWatchlist)}
                  />
                )}
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
  genres: PropTypes.func,
  selectMovie: PropTypes.func,
  getIsFaved: PropTypes.func,
  getIsInWatchlist: PropTypes.func,
  setFavlist: PropTypes.func,
  setWatchlist: PropTypes.func,
};
