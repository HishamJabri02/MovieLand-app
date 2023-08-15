/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getAllCountriesAsync } from "./getAllCountriesAsync";
const initialState = {
  loading: false,
  error: null,
  countries:[]
};
const getAllCitiesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountriesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCountriesAsync.fulfilled, (state, action) => {
        state.countries=action.payload.data
        state.loading = false;
      })
      .addCase(getAllCountriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getAllCitiesSlice.reducer;
