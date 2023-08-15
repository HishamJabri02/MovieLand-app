/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getMyOrdersAsync } from "./getMyOrdersAsync";
const initialState = {
  details: [],
  loading: false,
  error: null,
};
const getMyOrdersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyOrdersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMyOrdersAsync.fulfilled, (state, action) => {
        state.details = action.payload.data;
        state.loading = false;
      })
      .addCase(getMyOrdersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getMyOrdersSlice.reducer;
