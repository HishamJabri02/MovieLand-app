/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { registerAsync } from "./registerAsync";
const initialState = {
  loading: false,
  error: null,
  token: null,
  info: null,
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload.data.user;
        state.token = action.payload.data.token;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default registerSlice.reducer;
