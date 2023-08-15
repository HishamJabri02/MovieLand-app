/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { forgetPasswordApi } from "../api/forgetPasswordApi";
export const forgetPasswordAsync = createAsyncThunk(
  "forgetPassword/forgetPasswordAsync",
  async (data) => {
    try {
      const response = await forgetPasswordApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
