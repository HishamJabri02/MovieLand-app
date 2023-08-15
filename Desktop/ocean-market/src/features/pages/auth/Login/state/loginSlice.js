/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "./loginAsync";
const initialState = {
  status: "",
  info: null,
  loading: false,
  error: null,
  token: null,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        state.loading = false;
        state.info = action.payload.data.user;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default loginSlice.reducer;
