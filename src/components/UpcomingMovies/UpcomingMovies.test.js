import React from 'react';
import { renderWithProvider } from '../../utils/renderWithProvider';
import { UpcomingMovies } from './UpcomingMovies';

describe('UpcomingMovies', () => {
  const defaultProps = () => ({
    getUpcomingMovies: jest.fn(),
    isUpcomingMoviesLoading: false,
  });

  it('renders upcoming movies correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<UpcomingMovies {...props} />);

    expect(getByTestId('upcoming_movies')).toBeInTheDocument();
  });

  it('renders Upcoming Movies header text correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<UpcomingMovies {...props} />);

    expect(getByText('Upcoming Movies')).toBeInTheDocument();
  });

  it('renders upcoming spinner correctly if isUpcomingMoviesLoading true', () => {
    const props = defaultProps();
    props.isUpcomingMoviesLoading = true;
    const { getByTestId } = renderWithProvider(<UpcomingMovies {...props} />);

    expect(getByTestId('upcoming_page_spinner')).toBeInTheDocument();
  });
});
