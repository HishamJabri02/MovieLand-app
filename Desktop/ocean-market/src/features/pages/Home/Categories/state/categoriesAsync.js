/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { categoriesApi } from "../api/categoriesApi";
export const categoriesAsync = createAsyncThunk(
  "categories/categoriesAsync",
  async () => {
    try {
      const response = await categoriesApi();
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
