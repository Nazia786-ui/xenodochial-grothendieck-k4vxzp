import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const Appstore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default Appstore;
