import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../components/Cards';

describe('Cards', () => {
  it('render Cards component', () => {
    render(<Cards />);
    screen.debug();
  });
});
