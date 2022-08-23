import { configureStore } from "@reduxjs/toolkit";

import searchSettingsReducer from "../features/searchSettings/searchSettingsSlice";
import themeReducer from "../features/Theme/themeSlice";

export const store = configureStore({
  reducer: {
    searchSettings: searchSettingsReducer,
    theme: themeReducer
  },
});
