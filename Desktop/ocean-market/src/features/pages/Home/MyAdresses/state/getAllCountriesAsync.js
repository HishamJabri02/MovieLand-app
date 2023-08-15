/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCountriesApi } from "../api/getAllCountriesApi";
export const getAllCountriesAsync = createAsyncThunk(
  "countries/getAllCountriesAsync",
  async () => {
    try {
      const response = await getAllCountriesApi();
      return response;
    } catch (error) {
      throw error;
    }
  }
);
