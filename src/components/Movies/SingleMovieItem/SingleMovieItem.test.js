import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithProvider } from '../../../utils/renderWithProvider';
import { SingleMovieItem } from './SingleMovieItem';

describe('Movies/SingleMovieItem', () => {
  const defaultProps = () => ({
    selectedMovie: {
      popularity: 2235.816,
      vote_count: 34,
      video: false,
      poster_path: '/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg',
      id: 724989,
      adult: false,
      backdrop_path: '/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg',
      original_language: 'en',
      original_title: 'Leo Movie',
      genre_ids: [28, 53],
      title: 'Leo Movie',
      vote_average: 4.5,
      overview: 'Leo Movie Description',
      release_date: '2020-10-23',
      homepage: 'https://www.test.com/',
      runtime: 90,
    },
    genres: jest.fn(),
    getIsFaved: jest.fn(),
    getIsInWatchlist: jest.fn(),
    selectedMovieTrailer: '7Y6-w5Psupw',
  });

  it('renders single movie item container correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByTestId('single_movie_item_container')).toBeInTheDocument();
  });

  it('renders single movie trailer back correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByTestId('single_movie_trailer_back')).toBeInTheDocument();
  });

  it('renders single movie item card correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByTestId('single_movie_item_card')).toBeInTheDocument();
  });

  it('renders single movie info correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByTestId('single_movie_info')).toBeInTheDocument();
  });

  it('renders single movie trailer button correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByTestId('single_movie_trailer_button')).toBeInTheDocument();
  });

  it('renders single movie description correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByTestId('single_movie_description')).toBeInTheDocument();
  });

  it('renders single movie social correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByTestId('single_movie_social')).toBeInTheDocument();
  });

  it('should call getIsFaved when click heart icon', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SingleMovieItem {...props} />);

    fireEvent.click(getByTestId('empty_heart_single_icon'));

    expect(props.getIsFaved).toHaveBeenCalled();
  });

  it('should call getIsInWatchlist when click watchlist icon', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SingleMovieItem {...props} />);

    fireEvent.click(getByTestId('empty_watch_single_icon'));

    expect(props.getIsInWatchlist).toHaveBeenCalled();
  });

  it('renders title correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByText(props.selectedMovie.original_title)).toBeInTheDocument();
  });

  it('renders release date correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByText(props.selectedMovie.release_date)).toBeInTheDocument();
  });

  it('renders Back button correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByText('Back')).toBeInTheDocument();
  });

  it('renders Watch trailer correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByText('Watch trailer')).toBeInTheDocument();
  });

  it('renders runtime correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<SingleMovieItem {...props} />);

    expect(getByText(`${props.selectedMovie.runtime} min`)).toBeInTheDocument();
  });

  it('should redirect when click Watch now', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<SingleMovieItem {...props} />);
    expect(getByText('Watch now').closest('a')).toHaveAttribute(
      'href',
      'https://www.test.com/',
    );
  });
});
