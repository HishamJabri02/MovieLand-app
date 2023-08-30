/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { AddressesAsync } from "./AddressesAsync";
const initialState = {
  address: [],
  loading: false,
  error: null,
};
const AddressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddressesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddressesAsync.fulfilled, (state, action) => {
        state.address = action.payload;
        state.loading = false;
      })
      .addCase(AddressesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default AddressesSlice.reducer;
