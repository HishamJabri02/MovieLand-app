/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { brandsAsync } from "./brandsAsync";
const initialState = {
  brands: "",
  loading: false,
  error: null,
};
const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(brandsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(brandsAsync.fulfilled, (state, action) => {
        state.brands = action.payload.data;
        state.loading = false;
      })
      .addCase(brandsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default brandsSlice.reducer;
