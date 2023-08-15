/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getAllCitiesAsync } from "./getAllCitiesAsync";
const initialState = {
  cities: [],
  loading: false,
  error: null,
};
const getAllCitiesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCitiesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCitiesAsync.fulfilled, (state, action) => {
        state.cities=action.payload.data
        state.loading = false;
      })
      .addCase(getAllCitiesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getAllCitiesSlice.reducer;
