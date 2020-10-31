import React from 'react';
import { renderWithProvider } from '../../utils/renderWithProvider';
import { MainPage } from './MainPage';

describe('MainPage', () => {
  it('renders main page correctly if isSearchLoading false', () => {
    const props = {
      getGenres: jest.fn(),
      favoriteMovies: jest.fn(),
      watchlistMovies: jest.fn(),
      isSearchLoading: false,
    };

    const { getByTestId } = renderWithProvider(<MainPage {...props} />);

    expect(getByTestId('main_page_view')).toBeInTheDocument();
  });

  it('renders spinner correctly if isSearchLoading true', () => {
    const props = {
      getGenres: jest.fn(),
      favoriteMovies: jest.fn(),
      watchlistMovies: jest.fn(),
      isSearchLoading: true,
    };

    const { getByTestId } = renderWithProvider(<MainPage {...props} />);

    expect(getByTestId('main_page_spinner')).toBeInTheDocument();
  });

  it('renders side menu correctly', () => {
    const props = {
      getGenres: jest.fn(),
      favoriteMovies: jest.fn(),
      watchlistMovies: jest.fn(),
      isSearchLoading: false,
    };

    const { getByTestId } = renderWithProvider(<MainPage {...props} />);

    expect(getByTestId('side_menu')).toBeInTheDocument();
  });

  it('renders search movie item correctly if isSearchLoading false', () => {
    const props = {
      getGenres: jest.fn(),
      favoriteMovies: jest.fn(),
      watchlistMovies: jest.fn(),
      isSearchLoading: false,
    };

    const { getByTestId } = renderWithProvider(<MainPage {...props} />);

    expect(getByTestId('search_movie')).toBeInTheDocument();
  });
});
