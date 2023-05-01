import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import formReducer from './formReducer';
import searchReducer from './searchReducer';
import { paintingApi } from '../api/RTKpaintingService';

const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
    [paintingApi.reducerPath]: paintingApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingApi.middleware),
});

export function getNewStore(preloadedStore: PreloadedState<object>) {
  return configureStore({
    reducer: {
      form: formReducer,
      search: searchReducer,
      [paintingApi.reducerPath]: paintingApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(paintingApi.middleware),
    preloadedState: preloadedStore,
  });
}

export default store;
export type RootState = ReturnType<typeof store.getState>;
