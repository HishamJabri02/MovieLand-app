/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSavedLocation } from "../api/getSavedLocation";
export const getSavedLocationAsync = createAsyncThunk(
  "savedLocation/getSavedLocationAsync",
  async () => {
    try {
      const response = await getSavedLocation();
      return response;
    } catch (error) {
      throw error;
    }
  }
);
