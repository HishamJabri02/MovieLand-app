/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getRelatedProductAsync } from "./getRelatedProductAsync";
const initialState = {
  loading: false,
  error: null,
  details: "",
};
const getRelatedProductSlice = createSlice({
  name: "relatedProducts",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getRelatedProductAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRelatedProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(getRelatedProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getRelatedProductSlice.reducer;
