/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getAllFavoritesAsync } from "./getAllFavoritesAsync";
const initialState = {
  loading: false,
  likes: [],
  error: null,
};
const getAllFavoditesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFavoritesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllFavoritesAsync.fulfilled, (state, action) => {
        state.likes = action.payload.data;
        state.loading = false;
      })
      .addCase(getAllFavoritesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getAllFavoditesSlice.reducer;
