import React from 'react';
import { render } from '@testing-library/react';
import Cards from '../components/Cards';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('Cards', () => {
  it('render Cards component', () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    expect(document.querySelector('.flex-start')?.childNodes.length).toBeLessThanOrEqual(12);
  });
});
