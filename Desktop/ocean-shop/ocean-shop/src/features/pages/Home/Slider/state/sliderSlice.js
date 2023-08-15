/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { sliderAsync } from "./sliderAsync";
const initialState = {
  stories: [],
  loading: false,
  error: null,
};
const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sliderAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sliderAsync.fulfilled, (state, action) => {
        state.stories = action.payload;
        state.loading = false;
      })
      .addCase(sliderAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default sliderSlice.reducer;
