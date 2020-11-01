import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { RiMovieLine, RiMovieFill } from 'react-icons/ri';

import {
  truncateTitle,
  popularityColor,
  refactorTrailerUrl,
  displayGenresSingle,
  runTimeText,
} from '../utils';
import { SINGLE_MAX_TITLE, SINGLE_MAX_DESC } from 'components/Movies/consts';
import { IMAGE_URL } from 'utils/consts';

import logo from 'assests/logo.svg';
import './SingleMovieItem.scss';

export const SingleMovieItem = ({
  selectedMovie,
  selectedMovieTrailer,
  closeSelectedMovie,
  getIsFaved,
  getIsInWatchlist,
  setFavlist,
  setWatchlist,
}) => {
  const [watchTrailer, setWatchTrailer] = useState(false);

  const handleWatchTrailer = () => {
    setWatchTrailer(true);
  };

  const handleBackFromTrailer = () => {
    setWatchTrailer(false);
  };

  const handleBackFromSingle = () => {
    closeSelectedMovie();
  };

  const popularityClass = `PopularityCircle__${popularityColor(
    selectedMovie.vote_average,
  )}`;
  const title = truncateTitle(selectedMovie.original_title, SINGLE_MAX_TITLE);
  const poster = selectedMovie.poster_path
    ? `${IMAGE_URL}${selectedMovie.poster_path}`
    : logo;
  const backgroundImage = selectedMovie.backdrop_path
    ? `${IMAGE_URL}${selectedMovie.backdrop_path}`
    : logo;
  const isFaved = getIsFaved(selectedMovie.id);
  const isInWatchlist = getIsInWatchlist(selectedMovie.id);
  const genres = displayGenresSingle(selectedMovie?.genres);
  const runTime = runTimeText(selectedMovie.runtime);
  const description = truncateTitle(selectedMovie.overview, SINGLE_MAX_DESC);

  const setFavoriteMovies = (key) => {
    setFavlist(selectedMovie.id, key);
  };

  const setWatchlistMovies = (key) => {
    setWatchlist(selectedMovie.id, key);
  };

  return (
    <div
      className="SingleMovieItemContainer"
      data-testid="single_movie_item_container"
    >
      <div className="SingleMovieCard">
        {watchTrailer ? (
          <div
            className="SingleMovieTrailerContainer"
            data-testid="single_movie_trailer_container"
          >
            <button
              className="SingleMovieTrailerBack"
              onClick={handleBackFromTrailer}
              data-testid="single_movie_handle_back"
            >
              <span>Close</span>
            </button>
            <ReactPlayer
              className="SingleMovieTrailer"
              url={refactorTrailerUrl(selectedMovieTrailer)}
              controls
              width="100%"
              height="100%"
            />
          </div>
        ) : (
          <div data-testid="single_movie_item_card">
            <button
              className="SingleMovieTrailerBack"
              onClick={handleBackFromSingle}
              data-testid="single_movie_trailer_back"
            >
              <span>Back</span>
            </button>
            <div className="SingleInfoSection">
              <div className="SingleMovieHeader">
                <img className="SingleMoviePoster" src={poster} />
                <div
                  className="SingleMovieInfo"
                  data-testid="single_movie_info"
                >
                  <h1>{title}</h1>
                  <h4>{selectedMovie.release_date}</h4>
                  <h4>{genres}</h4>
                  {selectedMovie.runtime && <h4>{runTime}</h4>}
                  {selectedMovie.homepage && (
                    <a className="TrailerButton" href={selectedMovie.homepage}>
                      Watch now
                    </a>
                  )}
                  {selectedMovieTrailer && (
                    <button
                      className="TrailerButton"
                      onClick={handleWatchTrailer}
                      data-testid="single_movie_trailer_button"
                    >
                      Watch trailer
                    </button>
                  )}
                </div>
              </div>
              <div
                className="SingleMovieDesc"
                data-testid="single_movie_description"
              >
                <p className="text">{selectedMovie.tagline}</p>
                <p className="text">{description}</p>
              </div>
              <div className={popularityClass}>
                {selectedMovie.vote_average}
              </div>
              <div
                className="SingleMovieSocial"
                data-testid="single_movie_social"
              >
                <ul>
                  <li>
                    {isFaved ? (
                      <div data-testid="filled_heart_single_icon">
                        <BsHeartFill
                          fill="red"
                          onClick={() => setFavoriteMovies(!isFaved)}
                        />
                      </div>
                    ) : (
                      <div data-testid="empty_heart_single_icon">
                        <BsHeart
                          fill="red"
                          onClick={() => setFavoriteMovies(!isFaved)}
                        />
                      </div>
                    )}
                  </li>
                  <li>
                    {isInWatchlist ? (
                      <div data-testid="filled_watch_single_icon">
                        <RiMovieFill
                          fill="red"
                          onClick={() => setWatchlistMovies(!isInWatchlist)}
                        />
                      </div>
                    ) : (
                      <div data-testid="empty_watch_single_icon">
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
            <img className="SingleMovieBlurBack" src={backgroundImage} />
          </div>
        )}
      </div>
    </div>
  );
};

SingleMovieItem.propTypes = {
  selectedMovie: PropTypes.object,
  selectedMovieTrailer: PropTypes.string,
  closeSelectedMovie: PropTypes.func,
  getIsFaved: PropTypes.func,
  getIsInWatchlist: PropTypes.func,
  setFavlist: PropTypes.func,
  setWatchlist: PropTypes.func,
};
