/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { categoriesAsync } from "./categoriesAsync";
const initialState = {
  categories: [],
  loading: false,
  error: null,
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoriesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(categoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload.data;
        state.loading = false;
      })
      .addCase(categoriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default categoriesSlice.reducer;
