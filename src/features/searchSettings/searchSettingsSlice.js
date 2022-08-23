import { createSlice } from "@reduxjs/toolkit";

const lr = localStorage.getItem("safe");

const initialState = {
  lr: "lang_en", // enum
  safe: lr || "", // enum
  type: "search", // enum
};

export const searchSettingsSlice = createSlice({
  name: "searchSettings",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lr = action.payload;
    },
    setSafeMode: (state, action) => {
      state.safe = action.payload;
      localStorage.setItem("safe", action.payload);
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setLang, setSafeMode, setType } = searchSettingsSlice.actions;

export default searchSettingsSlice.reducer;
