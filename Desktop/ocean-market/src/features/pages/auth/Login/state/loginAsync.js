/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../api/loginApi";
export const loginAsync = createAsyncThunk("login/loginAsync", async (data) => {
  try {
    const response = await loginApi(data);
    return response;
  } catch (error) {
    throw error;
  }
});
