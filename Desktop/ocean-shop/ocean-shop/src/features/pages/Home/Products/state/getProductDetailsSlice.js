/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getProductDetailsAsync } from "./getProductDetailsAsync";
const initialState = {
  loading: false,
  error: null,
  productDetails: "",
};
const getProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    clearProductDetails: (state) => {
      state.productDetails = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetailsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductDetailsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(getProductDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { clearProductDetails } = getProductDetailsSlice.actions;
export default getProductDetailsSlice.reducer;
