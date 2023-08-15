/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getRegionsForCityAsync } from "./getRegionsForCityAsync";
const initialState = {
  citieswithRegions: [],
  loading: false,
  error: null,
};
const AddressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegionsForCityAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRegionsForCityAsync.fulfilled, (state, action) => {
        state.citieswithRegions = action.payload.data;
        state.loading = false;
      })
      .addCase(getRegionsForCityAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default AddressesSlice.reducer;
