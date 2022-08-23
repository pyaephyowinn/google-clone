import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lr: "lang_en",  // enum 
  safe: "", // enum
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
    },
    setType: (state, action) => {
      state.type = action.payload;
    }
  },
});

export const { setLang, setSafeMode, setType } = searchSettingsSlice.actions;

export default searchSettingsSlice.reducer;
