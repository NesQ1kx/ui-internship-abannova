import { configureStore } from '@reduxjs/toolkit';

import generalReducer from './generalReducer';
import cartReducer from './cartReducer';
import favoritesReducer from './favoritesReducer';

export const store = configureStore({
  reducer: {
    generalReducer,
    cartReducer,
    favoritesReducer
  },
})
