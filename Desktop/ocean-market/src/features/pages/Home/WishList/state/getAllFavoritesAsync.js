/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFavoritesApi } from "../api/getAllFavoritesApi";
export const getAllFavoritesAsync = createAsyncThunk(
  "favorite/getAllFavoritesAsync",
  async () => {
    try {
      const response = await getAllFavoritesApi();
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
