import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { painting } from '../types';

const modalObject: painting = {
  title: '',
  objectID: 0,
  primaryImage: '',
  primaryImageSmall: '',
  artistDisplayName: '',
  artistDisplayBio: '',
  artistNationality: '',
  artistBeginDate: '',
  artistEndDate: '',
  objectDate: '',
  objectName: '',
  geoLocation: '',
};
const initialState = { savedValue: '', currentValue: '', modalObject: modalObject };

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
    addModalObject: (state, action: PayloadAction<painting>) => {
      state.modalObject = action.payload;
    },
  },
});

export const { addSavedQstring, addCurrentQstring, addModalObject } = searchSlice.actions;
export default searchSlice.reducer;
