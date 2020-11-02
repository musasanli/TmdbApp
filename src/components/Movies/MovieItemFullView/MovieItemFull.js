import React from 'react';
import PropTypes from 'prop-types';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { RiMovieLine, RiMovieFill } from 'react-icons/ri';

import {
  truncateDesription,
  truncateTitle,
  popularityColor,
  displayGenres,
} from 'components/Movies/utils';
import { MAX_TITLE } from 'components/Movies/consts';
import { IMAGE_URL } from 'utils/consts';

import logo from 'assests/logo.svg';
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
  const title = truncateTitle(data.original_title, MAX_TITLE);
  const description = truncateDesription(data.overview, MAX_TITLE);
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
    <div className="MovieItemContainer" data-testid="movie_item_full_container">
      <div className="MovieCard">
        <div className="InfoSection">
          <div onClick={DetailedMovie}>
            <div className="MovieHeader" data-testid="movie_item_full_info">
              <img className="MoviePoster" src={poster} />
              <h1>{title}</h1>
              <h4>{data.release_date}</h4>
              <h4>{relatedGenres}</h4>
            </div>
            <div className="MovieDesc" data-testid="movie_item_full_desc">
              <p className="text">{description}</p>
            </div>
            <div className={popularityClass} data-testid="movie_item_full_vote">
              {data.vote_average}
            </div>
          </div>
          <div className="MovieSocial" data-testid="movie_item_full_social">
            <ul>
              <li>
                {isFaved ? (
                  <div data-testid="filled_heart_full_icon">
                    <BsHeartFill
                      fill="red"
                      onClick={() => setFavoriteMovies(!isFaved)}
                    />
                  </div>
                ) : (
                  <div data-testid="empty_heart_full_icon">
                    <BsHeart
                      fill="red"
                      onClick={() => setFavoriteMovies(!isFaved)}
                    />
                  </div>
                )}
              </li>
              <li>
                {isInWatchlist ? (
                  <div data-testid="filled_watch_full_icon">
                    <RiMovieFill
                      fill="red"
                      onClick={() => setWatchlistMovies(!isInWatchlist)}
                    />
                  </div>
                ) : (
                  <div data-testid="empty_watch_full_icon">
                    <RiMovieLine
                      fill="red"
                      onClick={() => setWatchlistMovies(!isInWatchlist)}
                    />
                  </div>
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
