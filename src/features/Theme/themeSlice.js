import { createSlice } from "@reduxjs/toolkit";

const darkMode = localStorage.getItem("darkMode");

const initialState = {
  darkMode: darkMode === "true" ? true : false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem("darkMode", action.payload)
    },
  },
});

export const { setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
