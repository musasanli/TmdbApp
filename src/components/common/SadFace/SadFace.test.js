import React from 'react';
import { renderWithProvider } from 'utils/renderWithProvider';
import { SadFace } from './SadFace';

describe('Movies/SadFace', () => {
  it('renders sad face image correctly', () => {
    const { getByTestId } = renderWithProvider(<SadFace />);

    expect(getByTestId('sad_face_img')).toHaveAttribute('src', 'sadface.png');
  });
});
