import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formReducer';
import searchReducer from './searchReducer';

const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
