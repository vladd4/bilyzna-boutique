import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Бюсти",
  type: "bra",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setTitle, setType } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;
