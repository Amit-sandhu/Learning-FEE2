import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

// Create one Redux store for shared cart state.
export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});