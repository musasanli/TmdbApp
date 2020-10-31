import React from 'react';
import { renderWithProvider } from '../../utils/renderWithProvider';
import { PopularMovies } from './PopularMovies';

describe('PopularMovies', () => {
  const defaultProps = () => ({
    getPopularMovies: jest.fn(),
    isPopularMoviesLoading: false,
  });

  it('renders popular movies correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<PopularMovies {...props} />);

    expect(getByTestId('popular_movies')).toBeInTheDocument();
  });

  it('renders Popular Movies header text correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<PopularMovies {...props} />);

    expect(getByText('Popular Movies')).toBeInTheDocument();
  });

  it('renders popular spinner correctly if isPopularMoviesLoading true', () => {
    const props = defaultProps();
    props.isPopularMoviesLoading = true;
    const { getByTestId } = renderWithProvider(<PopularMovies {...props} />);

    expect(getByTestId('popular_page_spinner')).toBeInTheDocument();
  });
});
