import React from 'react';
import { render } from '@testing-library/react';
import Cards from '../components/Cards';

describe('Cards', () => {
  it('render Cards component', () => {
    render(<Cards qString={''} />);
    expect(document.querySelector('.flex-start')?.childNodes.length).toBeLessThanOrEqual(12);
  });
});
