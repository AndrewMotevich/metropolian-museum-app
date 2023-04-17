import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = { savedValue: '', currentValue: '' };

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSavedQstring: (state, action: PayloadAction<string>) => {
      state.savedValue = action.payload;
    },
    addCurrentQstring: (state, action: PayloadAction<string>) => {
      state.currentValue = action.payload;
    },
  },
});

export const { addSavedQstring, addCurrentQstring } = searchSlice.actions;
export default searchSlice.reducer;
