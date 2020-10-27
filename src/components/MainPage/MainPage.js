import React from 'react';

import { FutureMoviesView } from '../FutureMovies';
import { PopularMoviesView } from '../PopularMovies';
import { SearcMovieView } from '../SearchMovie';

import './MainPage.scss';

export const MainPage = () => {
  return (
    <div className="MainPage">
      <SearcMovieView />
      <PopularMoviesView />
      <FutureMoviesView />
    </div>
  );
};
