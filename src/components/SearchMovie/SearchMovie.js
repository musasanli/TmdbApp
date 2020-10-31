import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchMovie.scss';

export const SearchMovie = ({ searchFilms, goHomePage }) => {
  const [query, setQuery] = useState('');

  const handleClick = () => {
    searchFilms(query);
    goHomePage();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length < 1) {
      searchFilms('');
    }
  };

  const onKeyPressed = (e) => {
    if (e.keyCode === 13) {
      searchFilms(query);
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
};
