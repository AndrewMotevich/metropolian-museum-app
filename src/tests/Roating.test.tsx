import React from 'react';
import { render } from '@testing-library/react';
import MainPage from '../pages/MainPage';

describe('Roating', () => {
  it('render main page', () => {
    render(<MainPage />);
  });
});
