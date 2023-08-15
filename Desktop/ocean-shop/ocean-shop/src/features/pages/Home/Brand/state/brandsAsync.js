/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { brandsApi } from "../api/brandsApi";
export const brandsAsync = createAsyncThunk("brands/brandsAsync", async () => {
  try {
    const response = await brandsApi();
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
});
