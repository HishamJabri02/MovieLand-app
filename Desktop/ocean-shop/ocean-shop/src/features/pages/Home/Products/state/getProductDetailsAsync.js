/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductDetailsApi } from "../api/getProductDetailsApi";
export const getProductDetailsAsync = createAsyncThunk(
  "productDetails/getProductDetailsAsync",
  async (id) => {
    try {
      const response = await getProductDetailsApi(id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
