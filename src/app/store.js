import { configureStore } from "@reduxjs/toolkit";

import searchSettingsReducer from "../features/searchSettings/searchSettingsSlice";
import themeReducer from "../features/theme/themeSlice";
import resultsReducer from "../features/results/resultsSlice";

export const store = configureStore({
  reducer: {
    searchSettings: searchSettingsReducer,
    theme: themeReducer,
    results: resultsReducer,
  },
});
