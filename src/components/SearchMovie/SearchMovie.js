import React, { useState } from 'react';

import './SearchMovie.scss';

export const SearchMovie = () => {
  const [query, setQuery] = useState('');

  function handleClick() {
    console.log(query);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

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
