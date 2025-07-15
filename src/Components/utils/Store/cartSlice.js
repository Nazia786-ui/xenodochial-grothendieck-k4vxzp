import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementItems: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItems: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload.id);
      }
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const {
  addItems,
  removeItems,
  clearCart,
  incrementItems,
  decrementItems,
} = cartSlice.actions;
export default cartSlice.reducer;
