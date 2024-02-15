import { configureStore } from "@reduxjs/toolkit";
import { alertReducer } from "./slices/alertSlice";
import { adminReducer } from "./slices/adminSlice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    admin: adminReducer,
  },
});
