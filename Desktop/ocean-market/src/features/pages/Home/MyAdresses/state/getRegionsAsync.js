/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRegionsApi } from "../api/getRegionsApi";
export const getRegionsAsync = createAsyncThunk(
  "regions/getRegionsAsync",
  async (id) => {
    try {
      const response = await getRegionsApi(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
