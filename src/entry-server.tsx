import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

export function render() {
  const html = ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <App />
    </Provider>
  );
  return { html };
}
