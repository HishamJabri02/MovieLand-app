import { createSlice } from "@reduxjs/toolkit";
import { forgetPasswordAsync } from "./forgetPasswordAsync";
const initialState = {
  status: "",
  phoneNumber: "",
  loading: false,
  success: false,
};
const forgetPasswordSlice = createSlice({
  name: "forgetPassword",
  initialState,
  reducers: {
    addPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgetPasswordAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgetPasswordAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.status = action.payload.data;
        state.success = true;
      })
      .addCase(forgetPasswordAsync.rejected, (state, action) => {
        state.loading = false;
        state.status = action.error.message;
      });
  },
});
export default forgetPasswordSlice.reducer;
export const { addPhoneNumber } = forgetPasswordSlice.actions;
