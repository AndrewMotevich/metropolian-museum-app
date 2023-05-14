import React from 'react';
import { render, screen } from '@testing-library/react';
import MyInputWithHooks from '../components/UI/input-search/MyInput-useHooks';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('MySearchInputs', () => {
  it('render MyInputHook component', () => {
    render(
      <Provider store={store}>
        <MyInputWithHooks query-name="search" placeholder="Search2" type="" />;
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Search2/i)).toBeDefined();
  });
});
