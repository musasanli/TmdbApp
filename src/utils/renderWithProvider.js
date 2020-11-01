import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store/configureStore';

export function renderWithProvider(ui) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}
