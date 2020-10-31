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
  const relatedGenres = displayGenres(genres(data?.genre_ids));
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
    <div className="MovieItemContainer" data-testid="movie_item_container">
      <div className="MovieCardPopular">
        <div className="InfoSectionPopular">
          <div
            className="MovieHeaderPopular"
            onClick={DetailedMovie}
            data-testid="movie_item_poster"
          >
            <img className="MoviePosterPopular" src={poster} />
          </div>
          <div className="MovieInfoPopular" data-testid="movie_item_info">
            <h2>{title}</h2>
            <h4>{data.release_date}</h4>
            <h4>{relatedGenres}</h4>
          </div>
          <div className={popularityClass} data-testid="movie_item_vote">
            {data.vote_average}
          </div>
          <div className="MovieSocialPopular" data-testid="movie_item_social">
            <ul>
              <li>
                {isFaved ? (
                  <div data-testid="filled_heart_icon">
                    <BsHeartFill
                      fill="red"
                      onClick={() => setFavoriteMovies(!isFaved)}
                    />
                  </div>
                ) : (
                  <div data-testid="empty_heart_icon">
                    <BsHeart
                      fill="red"
                      onClick={() => setFavoriteMovies(!isFaved)}
                    />
                  </div>
                )}
              </li>
              <li>
                {isInWatchlist ? (
                  <div data-testid="filled_watch_icon">
                    <RiMovieFill
                      fill="red"
                      onClick={() => setWatchlistMovies(!isInWatchlist)}
                    />
                  </div>
                ) : (
                  <div data-testid="empty_watch_icon">
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
