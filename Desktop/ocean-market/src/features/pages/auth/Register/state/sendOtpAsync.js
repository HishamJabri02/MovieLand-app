/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendOtpApi } from "../api/sendOtpAPi";
export const sendOtpAsync = createAsyncThunk(
  "sendOtp/sendOtpAsync",
  async (data) => {
    try {
      const response = await sendOtpApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
