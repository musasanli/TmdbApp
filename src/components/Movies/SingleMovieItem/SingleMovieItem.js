import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import { truncateTitle, popularityColor, refactorTrailerUrl } from '../utils';
import { SINGLE_MAX_TITLE, SINGLE_MAX_DESC } from '../consts';
import { IMAGE_URL } from '../../../utils/consts';

import logo from '../../../assests/logo.svg';
import './SingleMovieItem.scss';

export const SingleMovieItem = ({
  selectedMovie,
  selectedMovieTrailer,
  closeSelectedMovie,
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

  const poster = selectedMovie.poster_path
    ? `${IMAGE_URL}${selectedMovie.poster_path}`
    : logo;
  const backgroundImage = selectedMovie.backdrop_path
    ? `${IMAGE_URL}${selectedMovie.backdrop_path}`
    : logo;

  return (
    <div className="SingleMovieItemContainer">
      <div className="SingleMovieCard">
        {watchTrailer ? (
          <div className="SingleMovieTrailerContainer">
            <button
              className="SingleMovieTrailerBack"
              onClick={handleBackFromTrailer}
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
          <div>
            <button
              className="SingleMovieTrailerBack"
              onClick={handleBackFromSingle}
            >
              <span>Back</span>
            </button>
            <div className="SingleInfoSection">
              <div className="SingleMovieHeader">
                <img className="SingleMoviePoster" src={poster} />
                <div className="SingleMovieInfo">
                  <h1>
                    {truncateTitle(
                      selectedMovie.original_title,
                      SINGLE_MAX_TITLE,
                    )}
                  </h1>
                  <h4>{selectedMovie.release_date}</h4>
                  <h4>
                    {selectedMovie.genres.map((item) => item.name).join(', ')}
                  </h4>
                  {selectedMovie.runtime && (
                    <h4>{`${selectedMovie.runtime} min`}</h4>
                  )}
                  {selectedMovie.homepage && (
                    <a className="TrailerButton" href={selectedMovie.homepage}>
                      Watch now
                    </a>
                  )}
                  {selectedMovieTrailer && (
                    <button
                      className="TrailerButton"
                      onClick={handleWatchTrailer}
                    >
                      Watch trailer
                    </button>
                  )}
                </div>
              </div>
              <div className="SingleMovieDesc">
                <p className="text">{selectedMovie.tagline}</p>
                <p className="text">
                  {truncateTitle(selectedMovie.overview, SINGLE_MAX_DESC)}
                </p>
              </div>
              <div className={popularityClass}>
                {selectedMovie.vote_average}
              </div>
              <div className="SingleMovieSocial">
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
};
