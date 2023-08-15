import { createSlice } from "@reduxjs/toolkit";
import { VerificationAsync } from "./VerificationAsync";
const initialState = {
  message: "",
  loading: "",
  success: true,
};
const VerificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(VerificationAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(VerificationAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(VerificationAsync.rejected, (state, action) => {
        state.loading = false;
        state.message = action.error.message;
        state.success = false;
      });
  },
});
export default VerificationSlice.reducer;
