/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getUserAsync } from "./getUserAsync";
const initialState = {
  details: null,
  loading: false,
  error: null,
};
const getUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload.data;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default getUserSlice.reducer;
