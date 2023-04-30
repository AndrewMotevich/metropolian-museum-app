import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { StaticRouter } from 'react-router-dom/server';

export function render() {
  const storeState = store.getState();
  const { pipe } = ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return { pipe, storeState };
}
