/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRegionsForCity } from "../api/getRegionsForCity";
export const getRegionsForCityAsync = createAsyncThunk(
  "addresses/getRegionsForCityAsync",
  async (id) => {
    try {
      const response = await getRegionsForCity(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);
