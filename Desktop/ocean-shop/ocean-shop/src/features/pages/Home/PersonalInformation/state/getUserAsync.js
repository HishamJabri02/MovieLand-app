import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserApi } from "../api/getuserApi";
export const getUserAsync = createAsyncThunk("user/getUserAsync", async () => {
  try {
    const response = await getUserApi();
    return response;
  } catch (error) {
    throw error;
  }
});
