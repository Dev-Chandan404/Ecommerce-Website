import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },

    incrementQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },

    decrementQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        // remove item if qty is 1
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      }
    },
  },
});

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
