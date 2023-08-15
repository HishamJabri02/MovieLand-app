/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { allProductsAsync } from "./AllProductsAsync";
const productsList = {
  Top_Rated: "topRated",
  Offers: "offers",
  New_Arrival: "newArrival",
  Price_ASC: "priceAsc",
  Price_DESC: "priceDesc",
};
const initialState = {
  topRated: [],
  offers: [],
  newArrival: [],
  priceAsc: [],
  priceDesc: [],
  loading: false,
  error: null,
};
const allProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allProductsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allProductsAsync.fulfilled, (state, action) => {
        const productType = productsList[action.meta.arg.type];
        state[productType] = action.payload.data.products;
      })
      .addCase(allProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default allProductsSlice.reducer;
