/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { CheckOutAsync } from "./CheckOutAsync";
const initialState = {
  details: [],
  loading: false,
  error: null,
};
const CheckOutSlice = createSlice({
  name: "checkOut",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CheckOutAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CheckOutAsync.fulfilled, (state, action) => {
        state.details = action.payload.data;
        state.loading = false;
      })
      .addCase(CheckOutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default CheckOutSlice.reducer;
