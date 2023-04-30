import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formReducer';
import searchReducer from './searchReducer';
import { paintingApi } from '../api/RTKpaintingService';

declare global {
  interface Window {
    __PRELOADED_STATE__?: object;
  }
}

const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
    [paintingApi.reducerPath]: paintingApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingApi.middleware),
});
let store2 = store;
if (typeof window !== 'undefined') {
  const preloadedStateFromWindow = window.__PRELOADED_STATE__ || undefined;
  store2 = configureStore({
    reducer: {
      form: formReducer,
      search: searchReducer,
      [paintingApi.reducerPath]: paintingApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingApi.middleware),
    preloadedState: preloadedStateFromWindow,
  });
  delete window.__PRELOADED_STATE__;
}
export { store2 };
export default store;
export type RootState = ReturnType<typeof store.getState>;
