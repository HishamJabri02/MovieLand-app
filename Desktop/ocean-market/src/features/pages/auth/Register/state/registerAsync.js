/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi } from "../api/registerApi";
export const registerAsync = createAsyncThunk(
  "register/registerAsync",
  async (data) => {
    try {
      const response = await registerApi(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
