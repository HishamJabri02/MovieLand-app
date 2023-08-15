/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyOrdersApi } from "../api/getMyOrdersApi";
export const getMyOrdersAsync = createAsyncThunk(
  "order/getMyOrdersAsync",
  async () => {
    try {
      const response = await getMyOrdersApi();
      return response;
    } catch (error) {
      throw error;
    }
  }
);
