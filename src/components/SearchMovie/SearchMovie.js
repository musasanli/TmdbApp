import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './SearchMovie.scss';

export const SearchMovie = ({ searchFilms, getRandomMovie, goHomePage }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRandomMovie();
  }, [getRandomMovie]);

  const handleClick = () => {
    searchFilms(query);
    goHomePage();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="SearchMovieContainer">
      <div className="SearchMovie">
        <input
          className="TypeMovie"
          placeholder={'Type Movie'}
          onChange={handleChange}
        />
        <button className="Submit" onClick={handleClick}>
          <span>Search </span>
        </button>
      </div>
    </div>
  );
};

SearchMovie.propTypes = {
  searchFilms: PropTypes.func.isRequired,
  getRandomMovie: PropTypes.func.isRequired,
  goHomePage: PropTypes.func,
};
