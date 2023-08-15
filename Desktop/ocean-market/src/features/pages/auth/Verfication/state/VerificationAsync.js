/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetPasswordApi } from "../api/resetPasswordApi";
export const VerificationAsync = createAsyncThunk(
  "verification/VerificationAsync",
  async (data) => {
    try {
      const response = await resetPasswordApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
