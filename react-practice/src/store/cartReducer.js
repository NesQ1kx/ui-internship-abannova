import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
};

export const cartSelector = createSelector([(state) => state.cartReducer.cartProducts], (value) => value);

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push({ id: action.payload, count: 1 });
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(({id}) => id !== action.payload);
    },
    changeAmount: (state, action) => {
      const cartItem = state.cartProducts.find(({id}) => id === action.payload.id);

      cartItem.count = action.payload.count;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  changeAmount
} = cartSlice.actions;

export default cartSlice.reducer;
