/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getRegionsAsync } from "./getRegionsAsync";
const initialState = {
  regions: [],
  loading: false,
  error: null,
};
const getRegionFromCitySlice = createSlice({
  name: "regions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegionsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRegionsAsync.fulfilled, (state, action) => {
        state.regions = action.payload.data;
        state.loading = false;
      })
      .addCase(getRegionsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getRegionFromCitySlice.reducer;
