import React from 'react';
import { renderWithProvider } from 'utils/renderWithProvider';
import App from './App';

it('renders App correctly', () => {
  const { getByTestId } = renderWithProvider(<App />);

  expect(getByTestId('main_page')).toBeInTheDocument();
});
