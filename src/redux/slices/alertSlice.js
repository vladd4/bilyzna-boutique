import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  text: "",
  isOrder: false,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setShowAlert: (state, action) => {
      state.showAlert = action.payload;
    },
    setAlertText: (state, action) => {
      state.text = action.payload;
    },
    setIsOrder: (state, action) => {
      state.isOrder = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setShowAlert, setAlertText, setIsOrder } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
