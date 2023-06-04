import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: localStorage.getItem("buttonClicked") || false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    onDarkMode: (state) => {
      state.darkMode = true;
      localStorage.setItem("buttonClicked", true);
    },
    offDarkMode: (state) => {
      state.darkMode = false;
      localStorage.removeItem("buttonClicked");
    },
  },
});

export const { onDarkMode, offDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
