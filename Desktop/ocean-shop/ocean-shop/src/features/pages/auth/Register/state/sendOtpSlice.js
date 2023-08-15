/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { sendOtpAsync } from "./sendOtpAsync";
const initialState = {
  loading: false,
  status: "",
  error: null,
};
const sendOtpSlice = createSlice({
  name: "sendOtp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOtpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOtpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.data;
      })
      .addCase(sendOtpAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default sendOtpSlice.reducer;
