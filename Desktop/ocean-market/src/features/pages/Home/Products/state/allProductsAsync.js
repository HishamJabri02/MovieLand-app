/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { allProductsApi } from "../api/allProductsApi";
export const allProductsAsync = createAsyncThunk(
  "products/allProductsAsync",
  async ({ type, pageNumber = 1 }) => {
    try {
      const response = await allProductsApi(type, pageNumber);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
