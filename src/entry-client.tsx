import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { getNewStore } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

declare global {
  interface Window {
    __PRELOADED_STATE__: object;
  }
}

const preloadState = window.__PRELOADED_STATE__;

const newStore = getNewStore(preloadState);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={newStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
