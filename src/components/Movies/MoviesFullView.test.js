import React from 'react';
import { renderWithProvider } from '../../utils/renderWithProvider';
import { MoviesFullView } from './MoviesFullView';

describe('Movies/MoviesFullView', () => {
  const defaultProps = () => ({
    movies: [
      {
        popularity: 2235.816,
        vote_count: 34,
        video: false,
        poster_path: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
        id: 724989,
        adult: false,
        backdrop_path: '/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg',
        original_language: 'en',
        original_title: 'Hard Kill',
        genre_ids: [28, 53],
        title: 'Hard Kill',
        vote_average: 4.5,
        overview:
          'The work of billionaire tech CEO Donovan Chalmers is so valuable that he hires mercenaries to protect it, and a terrorist group kidnaps his daughter just to get it.',
        release_date: '2020-10-23',
      },
    ],
  });

  it('renders movie item container correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MoviesFullView {...props} />);

    expect(getByTestId('movie_full_container')).toBeInTheDocument();
  });

  it('renders sade face correctly', () => {
    const props = { movies: [] };
    const { getByTestId } = renderWithProvider(<MoviesFullView {...props} />);

    expect(getByTestId('sad_face')).toBeInTheDocument();
  });
});
