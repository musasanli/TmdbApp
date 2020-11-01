import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithProvider } from '../../utils/renderWithProvider';
import { SideMenu } from './SideMenu';

describe('SideMenu', () => {
  const defaultProps = () => ({
    goHomePage: jest.fn(),
    goFavPage: jest.fn(),
    goWatchPage: jest.fn(),
    closeSelectedMovie: jest.fn(),
  });

  it('renders side menu home item correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SideMenu {...props} />);

    expect(getByTestId('side_menu_home')).toBeInTheDocument();
  });

  it('renders side menu favorite home correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SideMenu {...props} />);

    expect(getByTestId('side_menu_favorite')).toBeInTheDocument();
  });

  it('renders side menu watchlist item correctly', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SideMenu {...props} />);

    expect(getByTestId('side_menu_watchlist')).toBeInTheDocument();
  });

  it('should call goHomePage function when click home', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SideMenu {...props} />);

    fireEvent.click(getByTestId('side_menu_home'));

    expect(props.closeSelectedMovie).toHaveBeenCalled();
    expect(props.goHomePage).toHaveBeenCalled();
  });

  it('should call goFavPage function when click favorites', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SideMenu {...props} />);

    fireEvent.click(getByTestId('side_menu_favorite'));

    expect(props.closeSelectedMovie).toHaveBeenCalled();
    expect(props.goFavPage).toHaveBeenCalled();
  });

  it('should call goWatchPage function when click watchlist', () => {
    const props = defaultProps();
    const { getByTestId } = renderWithProvider(<SideMenu {...props} />);

    fireEvent.click(getByTestId('side_menu_watchlist'));

    expect(props.closeSelectedMovie).toHaveBeenCalled();
    expect(props.goWatchPage).toHaveBeenCalled();
  });
});
