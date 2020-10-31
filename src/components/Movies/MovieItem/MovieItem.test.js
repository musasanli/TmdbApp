import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithProvider } from '../../../utils/renderWithProvider';
import { MovieItem } from './MovieItem';

describe('Movies/MovieItem', () => {
  const defaultProps = () => ({
    data: {
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
    genres: jest.fn(),
    getIsFaved: jest.fn(),
    getIsInWatchlist: jest.fn(),
  });

  it('renders movie item container correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MovieItem {...props} />);

    expect(getByTestId('movie_item_container')).toBeInTheDocument();
  });

  it('renders movie item poster correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MovieItem {...props} />);

    expect(getByTestId('movie_item_poster')).toBeInTheDocument();
  });

  it('renders movie item info correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MovieItem {...props} />);

    expect(getByTestId('movie_item_info')).toBeInTheDocument();
  });

  it('renders movie item vote average correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MovieItem {...props} />);

    expect(getByTestId('movie_item_vote')).toBeInTheDocument();
  });

  it('renders movie item social correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MovieItem {...props} />);

    expect(getByTestId('movie_item_social')).toBeInTheDocument();
  });

  it('renders fav icon correctly if isFaved false', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MovieItem {...props} />);

    expect(getByTestId('empty_heart_icon')).toBeInTheDocument();
  });

  it('renders watch icon correctly if isWatchlist false', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MovieItem {...props} />);

    expect(getByTestId('empty_watch_icon')).toBeInTheDocument();
  });

  it('should call getIsFaved when click heart icon', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MovieItem {...props} />);

    fireEvent.click(getByTestId('empty_heart_icon'));

    expect(props.getIsFaved).toHaveBeenCalled();
  });

  it('should call getIsInWatchlist when click watchlist icon', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<MovieItem {...props} />);

    fireEvent.click(getByTestId('empty_watch_icon'));

    expect(props.getIsInWatchlist).toHaveBeenCalled();
  });

  it('renders title correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<MovieItem {...props} />);

    expect(getByText(props.data.original_title)).toBeInTheDocument();
  });

  it('renders release date correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<MovieItem {...props} />);

    expect(getByText(props.data.release_date)).toBeInTheDocument();
  });
});
