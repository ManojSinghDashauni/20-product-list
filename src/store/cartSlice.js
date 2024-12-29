import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const find = state.cart.findIndex((item) => item.id == action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.cart.push(temp);
      }
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = []; 
    },
  },
});

export const { addItem, removeItem,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
