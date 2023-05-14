import React from 'react';
import { render } from '@testing-library/react';
import MyCard from '../components/UI/main-card/MyCard';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('MyCard', () => {
  const modal = jest.fn();
  it('render MyCard component', () => {
    render(
      <Provider store={store}>
        <MyCard modal={modal} key={123456} elem={121313} />
      </Provider>
    );
    expect(document.querySelector('.myCardImage')).toBeDefined();
  });
});
