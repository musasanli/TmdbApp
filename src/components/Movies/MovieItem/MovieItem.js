import React from 'react';
import PropTypes from 'prop-types';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { RiMovieLine, RiMovieFill } from 'react-icons/ri';

import { truncateTitle, popularityColor, displayGenres } from '../utils';
import { IMAGE_URL } from '../../../utils/consts';
import { MAX_POPULAR_TITLE } from '../consts';

import logo from '../../../assests/logo.svg';
import './MovieItem.scss';

export const MovieItem = ({
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
  const title = truncateTitle(data.original_title, MAX_POPULAR_TITLE);
  const relatedGenres = displayGenres(genres(data.genre_ids));
  const isFaved = getIsFaved(data.id);
  const isInWatchlist = getIsInWatchlist(data.id);

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
      <div className="MovieCardPopular" id="bright">
        <div className="InfoSectionPopular">
          <div className="MovieHeaderPopular" onClick={DetailedMovie}>
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
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  data: PropTypes.object,
  genres: PropTypes.func,
  selectMovie: PropTypes.func,
  getIsFaved: PropTypes.func,
  getIsInWatchlist: PropTypes.func,
  setFavlist: PropTypes.func,
  setWatchlist: PropTypes.func,
};
