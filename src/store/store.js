import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../slices/foodSlice";
import orderReducer from "../slices/orderSlice";

export const store = configureStore({
  reducer: {
    food: foodReducer,
    order: orderReducer,
  },
});
