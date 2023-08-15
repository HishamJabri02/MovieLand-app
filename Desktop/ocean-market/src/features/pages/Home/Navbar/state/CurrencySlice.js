/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { currencyAsync } from "./currencyAsync";
const initialState = {
  loading: false,
  currency: [],
  error: null,
};
const WishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(currencyAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currencyAsync.fulfilled, (state, action) => {
        state.currency = action.payload.data;
        state.loading = false;
      })
      .addCase(currencyAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default WishListSlice.reducer;
