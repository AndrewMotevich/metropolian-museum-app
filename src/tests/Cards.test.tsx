import React from 'react';
import { render } from '@testing-library/react';
import Cards from '../components/Cards';

describe('Cards', () => {
  it('render Cards component', () => {
    render(<Cards />);
    // expect(screen.getAllByЕуп(/MyCard #/i).length).toBeLessThanOrEqual(12);
  });
});
