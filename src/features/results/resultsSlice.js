import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchResults } from "./resultsServices";

const initialState = {
  status: "idle", // enum ['idle', 'loading', 'completed', 'error']
  data: null, // returned object from the API
  errMessage: "",
};

export const searchResults = createAsyncThunk(
  "results/get",
  async (queryStr, thunkAPI) => {
    try {
      const { lr, safe, type } = thunkAPI.getState().searchSettings;
      return await fetchResults(queryStr, type, safe, lr);
    } catch (err) {
      return thunkAPI.rejectWithValue(err || err.message);
    }
  }
);

const resultsSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchResults.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(searchResults.fulfilled, (state, action) => {
        state.status = "completed";
        state.data = action.payload;
      })
      .addCase(searchResults.rejected, (state, action) => {
        state.status = "error";
        state.errMessage = action.payload;
      })
  },
});

export default resultsSlice.reducer;
