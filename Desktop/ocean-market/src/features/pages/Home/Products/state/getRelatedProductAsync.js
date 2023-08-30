/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRelatedProductApi } from "../api/getRelatedProductApi";
export const getRelatedProductAsync = createAsyncThunk(
  "products/allProductsAsync",
  async (id) => {
    try {
      const response = await getRelatedProductApi(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
