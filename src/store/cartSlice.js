import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        console.log(action.payload);
      }
      // const todo = {
      //   id: nanoid(),
      //   text: action.payload,
      // };
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
