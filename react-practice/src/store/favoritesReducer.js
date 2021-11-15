import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSelector = createSelector([(state) => state.favoritesReducer.favorites], (value) => value);

export const favoritesSlice = createSlice({
  name: 'favoritesReducer',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToFavorites,
  removeFromFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
