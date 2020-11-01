import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MIN_CHAR_QUERY, ENTER_KEY_CODE } from './consts';
import './SearchMovie.scss';

export const SearchMovie = ({
  searchFilms,
  goHomePage,
  closeSelectedMovie,
}) => {
  const [query, setQuery] = useState('');

  const searchMovie = () => {
    closeSelectedMovie();
    searchFilms(query);
    goHomePage();
  };

  const handleClick = () => searchMovie();

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length < MIN_CHAR_QUERY) {
      searchFilms('');
    }
  };

  const onKeyPressed = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      searchMovie();
    }
  };

  return (
    <div className="SearchMovieContainer">
      <div className="SearchMovie" data-testid="search_movie_container">
        <input
          className="TypeMovie"
          data-testid="search_movie_input"
          placeholder={'Type Movie'}
          onChange={handleChange}
          onKeyDown={onKeyPressed}
        />
        <button
          className="Submit"
          data-testid="search_movie_button"
          onClick={handleClick}
        >
          <span>Search </span>
        </button>
      </div>
    </div>
  );
};

SearchMovie.propTypes = {
  searchFilms: PropTypes.func.isRequired,
  goHomePage: PropTypes.func,
  closeSelectedMovie: PropTypes.func,
};
