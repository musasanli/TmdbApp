import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithProvider } from '../../utils/renderWithProvider';
import { SearchMovie } from './SearchMovie';

describe('SearchMovie', () => {
  const defaultProps = () => ({
    searchFilms: jest.fn(),
    goHomePage: jest.fn(),
  });

  const setupInput = () => {
    const props = defaultProps();
    const utils = renderWithProvider(<SearchMovie {...props} />);
    const input = utils.getByTestId('search_movie_input');
    return {
      input,
      ...utils,
    };
  };

  it('renders search movie container correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SearchMovie {...props} />);

    expect(getByTestId('search_movie_container')).toBeInTheDocument();
  });

  it('renders search movie button correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SearchMovie {...props} />);

    expect(getByTestId('search_movie_button')).toBeInTheDocument();
  });

  it('renders search movie input correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SearchMovie {...props} />);

    expect(getByTestId('search_movie_input')).toBeInTheDocument();
  });

  it('should call searchFilm function when click Search', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SearchMovie {...props} />);

    fireEvent.click(getByTestId('search_movie_button'));

    expect(props.searchFilms).toHaveBeenCalled();
  });

  it('renders search button text correctly', () => {
    const props = defaultProps();
    const { getByText } = renderWithProvider(<SearchMovie {...props} />);

    expect(getByText('Search')).toBeInTheDocument();
  });

  it('should set input value by typing', () => {
    const { input } = setupInput();
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'Kill Bill' } });
    expect(input.value).toBe('Kill Bill');
  });
});
