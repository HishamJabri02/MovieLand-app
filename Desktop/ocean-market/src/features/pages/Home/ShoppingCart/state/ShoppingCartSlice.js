/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { ShoppingCartAsync } from "./ShoppingCartAsync";
const initialState = {
  details: [],
  loading: false,
  error: null,
};
const ShoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(ShoppingCartAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ShoppingCartAsync.fulfilled, (state, action) => {
        state.details = action.payload.data;
        state.loading = false;
      })
      .addCase(ShoppingCartAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default ShoppingCartSlice.reducer;
