/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getSavedLocationAsync } from "./getSavedLocationAsync";
const initialState = {
  locations: [],
  loading: false,
  error: null,
};
const getSavedLocationSlice = createSlice({
  name: "savedLocation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSavedLocationAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSavedLocationAsync.fulfilled, (state, action) => {
        state.locations = action.payload.data;
        state.loading = false;
      })
      .addCase(getSavedLocationAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getSavedLocationSlice.reducer;
